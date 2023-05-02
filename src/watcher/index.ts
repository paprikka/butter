import { log } from "../log";
import { SponsoredTimestamp, detectSponsoredContent } from "./detector";
import { createPlayerControl } from "./player-control";

export type TranscriptLine = {
  text: string;
  offsetSeconds: number;
  durationSeconds: number;
};

export const createWatcher = ({
  onTimestampsUpdate,
  onSponsoredTimestampEnter,
}: {
  onTimestampsUpdate: (timestamps: SponsoredTimestamp[]) => void;
  onSponsoredTimestampEnter: (timestamp: SponsoredTimestamp) => void;
}) => {
  let destroyPlayerControl: () => void = () => {};
  const start = async (openAIAPIKey: string) => {
    onTimestampsUpdate([]);
    destroyPlayerControl();

    log("start", { openAIAPIKey });
    const getTranscript = async () => {
      const videoID = new URL(location.href).searchParams.get("v");

      const transcript = await fetch(
        `http://localhost:3000/api/transcriptions?id=${videoID}`,
        {
          mode: "cors",
        }
      )
        .then((res) => res.json() as Promise<{ transcript: TranscriptLine[] }>)
        .then(({ transcript }) => transcript);

      log("transcript", transcript);

      return transcript;
    };

    const transcript = await getTranscript();

    const sponsoredTimestamps = await detectSponsoredContent(
      transcript,
      openAIAPIKey
    );

    onTimestampsUpdate(sponsoredTimestamps);

    log("sponsoredTimestamps", sponsoredTimestamps);

    const videoElement = document.querySelector("video");
    if (!videoElement) throw new Error("Cannot find video element");

    destroyPlayerControl = createPlayerControl(
      videoElement,
      sponsoredTimestamps,
      (timestamp) => {
        log("onSponsoredTimestampEnter", timestamp);
        onSponsoredTimestampEnter(timestamp);
      }
    );
  };

  return {
    start,
  };
};
