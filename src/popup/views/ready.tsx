import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { BackgroundMessage, ClientMessage } from "../../extension-message";
import { log } from "../../log";
import { AppState } from "../state";
import { ClientState, defaultState } from "../../client-state";

const clientState = signal<ClientState>({ ...defaultState });

const port = signal<chrome.runtime.Port | null>(null);

export const ReadyView = ({ appState }: { appState: AppState }) => {
  useEffect(() => {
    log("connecting to the background script");
    const connectToCurrentTab = async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const tabId = tab?.id;
      if (!tabId) {
        log("no tab id");
        return;
      }

      port.value = chrome.tabs.connect(tabId);
      port.value.onMessage.addListener((message: ClientMessage) => {
        if (message.type === "content:state:update") {
          log("got state update", message.state);
          clientState.value = { ...message.state };
        }
      });
    };

    connectToCurrentTab();
  }, []);

  const sendMessage = (message: BackgroundMessage) => {
    if (!port.value) {
      log("no port");
      return;
    }

    port.value.postMessage(message);
  };

  return (
    <div>
      <h1>Ready</h1>
      {clientState.value.tabStatus}
      <button onClick={() => (appState.step.value = "missing-api-key")}>
        Options
      </button>
      {clientState.value.isBlockerEnabled ? (
        <button
          onClick={() => {
            sendMessage({
              type: "content:disable-blocker",
            });

            window.close();
          }}
        >
          disable
        </button>
      ) : (
        <button
          onClick={() =>
            sendMessage({
              type: "content:enable-blocker",
              openAIAPIKey: appState.openAIAPIKey.value,
            })
          }
        >
          enable
        </button>
      )}

      <pre>
        <code>{JSON.stringify(clientState.value, null, 2)}</code>
      </pre>
    </div>
  );
};
