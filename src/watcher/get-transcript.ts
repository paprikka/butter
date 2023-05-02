import { TranscriptLine } from ".";
import { log } from "../log";

export const getTranscript = async () => {
  const videoID = new URL(location.href).searchParams.get("v");

  const transcript = await fetch(
    `https://butter-api-gamma.vercel.app/api/transcriptions?id=${videoID}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json() as Promise<{ transcript: TranscriptLine[] }>)
    .then(({ transcript }) => transcript);

  log("transcript", transcript);

  return transcript;
};
