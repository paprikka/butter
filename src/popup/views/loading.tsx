import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { AppState } from "../state";

export const LoadingView = ({ appState }: { appState: AppState }) => {
  const s = signal(1);
  useEffect(() => {
    const t = setInterval(() => {
      s.value++;
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  console.log("LoadingView");

  useEffect(() => {
    console.log("LoadingView mounted");
    chrome.storage.local.get(["openAIAPIKey"]).then((result) => {
      if (result.openAIAPIKey) {
        appState.openAIAPIKey.value = result.openAIAPIKey;
        appState.step.value = "ready";
        return;
      }
      appState.step.value = "missing-api-key";
    });
  }, []);
  //asd
  return <div>Loading...{s.value}</div>;
};
