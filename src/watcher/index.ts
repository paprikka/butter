import { log } from "../log";
import { SponsoredTimestamp, detectSponsoredContent } from "./detector";
import { getTranscript } from "./get-transcript";
import { createPlayerControl } from "./player-control";

export type TranscriptLine = {
  text: string;
  offsetSeconds: number;
  durationSeconds: number;
};

const createLocationObserver = (callback: () => void) => {
  let lastURL = location.href;
  let timer = setInterval(() => {
    if (location.href !== lastURL) {
      lastURL = location.href;
      callback();
    }
  }, 1000);

  return () => clearInterval(timer);
};

export const createWatcher = ({
  onTimestampsUpdate,
  onProcessingStart,
  onProcessingError,
  onProcessingComplete,
  onSponsoredTimestampEnter,
}: {
  onTimestampsUpdate: (timestamps: SponsoredTimestamp[]) => void;
  onSponsoredTimestampEnter: (timestamp: SponsoredTimestamp) => void;
  onProcessingStart: () => void;
  onProcessingError: (error: Error) => void;
  onProcessingComplete: () => void;
}) => {
  let destroyPlayerControl: () => void = () => {};

  const start = async (openAIAPIKey: string) => {
    const processCurrentPage = async () => {
      log("processing current page");

      onTimestampsUpdate([]);
      destroyPlayerControl();

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

    onProcessingStart();
    await processCurrentPage()
      .then(onProcessingComplete)
      .catch(onProcessingError);

    createLocationObserver(() => {
      log("video changed, processing new page...");
      const isVideoPlayerPage =
        location.pathname === "/watch" &&
        new URL(location.href).searchParams.get("v");

      if (!isVideoPlayerPage) return log("not a video player page, skipping");

      onProcessingStart();
      processCurrentPage().then(onProcessingComplete).catch(onProcessingError);
    });
  };

  return {
    start,
  };
};
