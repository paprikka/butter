import { signal, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { ClientState, defaultState } from "../../client-state";
import { BackgroundMessage, ClientMessage } from "../../extension-message";
import { log } from "../../log";
import { Button } from "../components/button";
import { HGroup, VGroup } from "../components/layout";
import { Spacer } from "../components/spacer";
import { Toggle } from "../components/toggle";
import { AppState } from "../state";
import styles from "./ready.module.css";
import { PageContainer } from "../components/page-container";
import { Overlay } from "../components/overlay";
import { Alert } from "../components/alert";

const clientState = signal<ClientState>({ ...defaultState });

const port = signal<chrome.runtime.Port | null>(null);

const formatSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
export const ReadyView = ({ appState }: { appState: AppState }) => {
  useEffect(() => {
    log({ appState });
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

  const userNeedsToRestart = useSignal(false);

  const handleToggleClick = (shouldEnable: boolean) => {
    if (shouldEnable) {
      sendMessage({
        type: "content:enable-blocker",
        openAIAPIKey: appState.openAIAPIKey.value,
      });
    } else {
      userNeedsToRestart.value = true;
    }

    // perform an optimistic update
    clientState.value = {
      ...clientState.value,
      isBlockerEnabled: shouldEnable,
    };
  };

  const handleRestartClick = () => {
    sendMessage({
      type: "content:disable-blocker",
    });
    window.close();
  };

  return (
    <PageContainer isPadded={false}>
      <Overlay isVisible={userNeedsToRestart.value}>
        <Button level="primary" onClick={handleRestartClick}>
          Reload tab
        </Button>
      </Overlay>
      <VGroup>
        <header class={styles.topNav}>
          <HGroup>
            <Toggle
              value={clientState.value.isBlockerEnabled}
              onChange={handleToggleClick}
            />
            <Spacer />
            <Button onClick={() => (appState.step.value = "missing-api-key")}>
              Settings
            </Button>
          </HGroup>
        </header>

        {clientState.value.isBlockerEnabled &&
        clientState.value.tabStatus === "idle" &&
        clientState.value.foundSponsoredTimestamps?.length ? (
          <details class={styles.section}>
            <summary>
              Found{" "}
              <strong>
                {clientState.value.foundSponsoredTimestamps.length}
              </strong>{" "}
              sponsored segments
            </summary>

            <ol class={styles.timings}>
              {clientState.value.foundSponsoredTimestamps.map(
                (timestamp, ind) => (
                  <li key={ind}>
                    <time>{formatSeconds(timestamp.startSeconds)}</time>
                    <span class={styles.timingsSeparator} />
                    <time>{formatSeconds(timestamp.endSeconds)}</time>
                  </li>
                )
              )}
            </ol>
          </details>
        ) : null}

        {clientState.value.isBlockerEnabled &&
        clientState.value.tabStatus === "idle" &&
        !clientState.value.foundSponsoredTimestamps?.length ? (
          <div class={styles.section}>
            <Alert>No sponsored content found.</Alert>
          </div>
        ) : null}

        {!clientState.value.isBlockerEnabled ? (
          <div class={styles.inactive}>
            <p>The extension is not active in this tab</p>
            <Button level="primary" onClick={() => handleToggleClick(true)}>
              Spread that shit
            </Button>
          </div>
        ) : null}

        {clientState.value.tabStatus === "error" ? (
          <div class={styles.section}>
            <Alert level="error">
              Unrecognised error, try refreshing the page
            </Alert>
          </div>
        ) : null}

        {clientState.value.tabStatus === "processing" ? (
          <div class={styles.section}>
            <Alert>Processing video...</Alert>
          </div>
        ) : null}

        <footer class={styles.bottomNav}>
          <HGroup>
            <Spacer />
            <a href="./first-run.html" target="_blank">
              About
            </a>
            <a href="https://sonnet.io" target="_blank">
              Feedback
            </a>
          </HGroup>
        </footer>
      </VGroup>
    </PageContainer>
  );
};
