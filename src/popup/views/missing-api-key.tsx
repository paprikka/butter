import { useSignal } from "@preact/signals";
import { AppState } from "../state";
import styles from "./missing-api-key.module.css";
import { wait } from "../../wait";

const checkAPIKey = async (apiKey: string) => {
  await wait(1000);

  return fetch("https://api.openai.com/v1/models", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((res) => res.ok);
};

export const MissingAPIKeyView = ({ appState }: { appState: AppState }) => {
  const currentAPIKey = useSignal(appState.openAIAPIKey.value);
  const isChecking = useSignal(false);
  const apiKeyCheckStatus = useSignal<"unknown" | "valid" | "invalid">(
    "unknown"
  );

  return (
    <div>
      {isChecking.value ? (
        <div className={styles.overlay}>loading...</div>
      ) : null}

      <h1>Missing API key</h1>
      <p>OpenAI API key is missing. Please enter it below.</p>
      <input
        type="text"
        value={currentAPIKey.value}
        onInput={(e) => {
          apiKeyCheckStatus.value = "unknown";
          currentAPIKey.value = e.currentTarget.value;
        }}
      />
      <button
        disabled={currentAPIKey.value.length < 5}
        onClick={() => {
          appState.openAIAPIKey.value = currentAPIKey.value;
          chrome.storage.local.set(
            { openAIAPIKey: currentAPIKey.value },
            () => {
              appState.step.value = "ready";
            }
          );
        }}
      >
        Save
      </button>

      <button
        onClick={() => {
          isChecking.value = true;
          checkAPIKey(currentAPIKey.value).then((isOK) => {
            isChecking.value = false;
            apiKeyCheckStatus.value = isOK ? "valid" : "invalid";
          });
        }}
      >
        check
      </button>

      <button
        onClick={() => {
          chrome.storage.local.clear().then(() => {
            appState.openAIAPIKey.value = "";
            appState.step.value = "loading";
          });
        }}
      >
        clear my data
      </button>

      {appState.openAIAPIKey.value ? (
        <button
          onClick={() => {
            appState.step.value = "ready";
          }}
        >
          back
        </button>
      ) : null}
      {apiKeyCheckStatus.value === "valid" ? <div>API key is valid</div> : null}

      {apiKeyCheckStatus.value === "invalid" ? (
        <div>API key is invalid</div>
      ) : null}
    </div>
  );
};
