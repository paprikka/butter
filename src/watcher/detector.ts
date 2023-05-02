import { log } from "../log";
import { TranscriptLine } from ".";
import { retryPromiseWithDelay } from "../retry-with-delay";

const round = (num: number) => Math.round(num * 100) / 100;
const formatLine = (line: TranscriptLine) =>
  `${round(line.offsetSeconds)}s\t${line.text}`;

const makePromptForChunk = (chunk: string) =>
  `
This is a video transcript with each line in format:

<time in seconds>\t<text>

== video transcript chunk start ==

${chunk}

== video transcript chunk end ==

Answer the following questions in JSON format:

1. Does this transcript contain sponsored content?
2. If so, at what time does the sponsored content start?
3. If so, at what time does the sponsored content end?

Reply in this format (JSON): 
{ "isSponsoredFound": boolean, startSeconds: number, endSeconds: number }
`.trim();

const makeAnalyseChunkRequest = async (chunk: string, apiKey: string) => {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: chunk }],
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });
};

type ChunkSponsoredFoundResult = {
  index: number;
  isSponsoredFound: true;
  startSeconds: number;
  endSeconds: number;
};
type ChunkSponsoredNotFoundResult = { index: number; isSponsoredFound: false };

// Analyze each chunk and look for sponsored content mentions
async function analyzeChunk(
  chunk: string,
  index: number,
  apiKey: string
): Promise<ChunkSponsoredFoundResult | ChunkSponsoredNotFoundResult> {
  const prompt = makePromptForChunk(chunk);

  const response = await makeAnalyseChunkRequest(prompt, apiKey);
  if (!response) return { isSponsoredFound: false, index };
  const resultText = response.choices[0]?.message?.content;

  if (resultText === "not found") {
    return { isSponsoredFound: false, index };
  }

  const { isSponsoredFound, startSeconds, endSeconds } = JSON.parse(
    resultText
  ) as Partial<ChunkSponsoredFoundResult>;

  if (!isSponsoredFound) return { isSponsoredFound: false, index };
  if (typeof startSeconds !== "number" || typeof endSeconds !== "number")
    return { isSponsoredFound: false, index };

  return { isSponsoredFound, startSeconds, endSeconds, index };
}

const splitTranscript = (
  transcriptLines: string[],
  maxTokens: number,
  overlap: number
) => {
  let chunks = [];
  let currentLineIndex = 0;
  let currentChunkIndex = 0;
  const maxChunkLength = maxTokens - overlap;

  while (currentLineIndex < transcriptLines.length) {
    if (!chunks[currentChunkIndex]) {
      chunks[currentChunkIndex] = "";
    }

    if (chunks[currentChunkIndex].length > maxChunkLength) {
      currentChunkIndex++;
      continue;
    }

    const currentLine = transcriptLines[currentLineIndex];
    chunks[currentChunkIndex] = `${chunks[currentChunkIndex]}\n${currentLine}`;
    currentLineIndex++;
  }

  return chunks.map((chunk) => chunk.trim());
};

export type SponsoredTimestamp = {
  startSeconds: number;
  endSeconds: number;
};

export const detectSponsoredContent = async (
  transcript: TranscriptLine[],
  apiKey: string
): Promise<SponsoredTimestamp[]> => {
  const promptLength = makePromptForChunk("").length;
  const maxTokens = 4096 - promptLength; // GPT-3.5's maximum tokens per request
  const overlap = 100; // Overlap between chunks to ensure continuity

  const transcriptLines = transcript.map(formatLine);

  log("transcriptLines", transcriptLines.join("\n"));
  const chunks = splitTranscript(transcriptLines, maxTokens, overlap);

  console.time("analyzeChunk");

  return Promise.all(
    chunks.map((chunk, ind) => {
      log(`analyzing chunk ${ind} of ${chunks.length}`, { chunk });
      return retryPromiseWithDelay(
        () =>
          analyzeChunk(chunk, ind, apiKey).then((result) => {
            log(`analyzed chunk ${ind} of ${chunks.length}`);
            return result;
          }),
        1000,
        3,
        (error) => {
          log(`analyzing chunk ${ind} of ${chunks.length} failed`, {
            error,
            chunk,
          });
        }
      );
    })
  ).then((results) => {
    const isFound = (
      chunkResult: ChunkSponsoredFoundResult | ChunkSponsoredNotFoundResult
    ): chunkResult is ChunkSponsoredFoundResult => chunkResult.isSponsoredFound;

    // TODO: merge overlapping/close chunks
    const sponsoredTimestamps = results.filter(isFound).map((result) => {
      return {
        startSeconds: result.startSeconds,
        endSeconds: result.endSeconds,
      };
    });

    log("all chunks analyzed, results:", { results });
    console.table(sponsoredTimestamps);
    console.timeEnd("analyzeChunk");

    return sponsoredTimestamps;
  });
};
