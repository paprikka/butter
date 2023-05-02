import { log } from "../log";

type TranscriptLine = {
  text: string;
  offset: number;
  duration: number;
};

export const createWatcher = () => {
  const start = (openAIAPIKey: string) => {
    log("start", { openAIAPIKey });
    const getTranscription = async () => {
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
    };

    getTranscription();
    // const videoElement = document.querySelector('video');
  };

  return {
    start,
  };
};
