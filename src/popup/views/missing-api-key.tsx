import { useSignal } from "@preact/signals";
import { wait } from "../../wait";
import { Alert } from "../components/alert";
import { Button } from "../components/button";
import { HGroup, VGroup } from "../components/layout";
import { Overlay } from "../components/overlay";
import { PageContainer } from "../components/page-container";
import { Spacer } from "../components/spacer";
import { TextInput } from "../components/text-input";
import { AppState } from "../state";

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
    <PageContainer>
      <Overlay isVisible={isChecking.value}>
        <p>Checking status...</p>
      </Overlay>

      <h1>Settings</h1>
      <p>
        OpenAI API key is missing. <br /> You can get one{" "}
        <a
          href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <VGroup>
        <TextInput
          placeholder="sk-..."
          value={currentAPIKey.value}
          onChange={(newKey) => {
            apiKeyCheckStatus.value = "unknown";
            currentAPIKey.value = newKey;
          }}
        />
        <HGroup>
          <Button
            level="primary"
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
          </Button>

          <Button
            onClick={() => {
              isChecking.value = true;
              checkAPIKey(currentAPIKey.value).then((isOK) => {
                isChecking.value = false;
                apiKeyCheckStatus.value = isOK ? "valid" : "invalid";
              });
            }}
          >
            Check
          </Button>

          <Button
            onClick={() => {
              chrome.storage.local.clear().then(() => {
                appState.openAIAPIKey.value = "";
                appState.step.value = "loading";
              });
            }}
          >
            Clear my data
          </Button>
          <Spacer />
          {appState.openAIAPIKey.value ? (
            <Button
              onClick={() => {
                appState.step.value = "ready";
              }}
            >
              Back
            </Button>
          ) : null}
        </HGroup>
        <VGroup>
          {apiKeyCheckStatus.value === "valid" ? (
            <Alert level="success">API key is valid</Alert>
          ) : null}

          {apiKeyCheckStatus.value === "invalid" ? (
            <Alert level="error">API key is invalid</Alert>
          ) : null}
        </VGroup>
      </VGroup>
    </PageContainer>
  );
};
