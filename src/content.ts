import { createAudioNotifier } from "./audio-notifier";
import { triggerBadgeUpdate } from "./badge-notifier";
import { ClientState, makeStore } from "./client-state";
import { BackgroundMessage, ClientMessage } from "./extension-message";
import { log } from "./log";
import { createWatcher } from "./watcher";

log("content script loaded");

const store = makeStore();

let isPortConnected = false;

// TODO: drop that, use subs
triggerBadgeUpdate(store.state, (message) => {
  try {
    chrome.runtime.sendMessage(message);
  } catch (err) {
    log("Failed to send message to background", { err });
  }
});

chrome.runtime.onConnect.addListener((port) => {
  log("Port connected");
  isPortConnected = true;

  port.postMessage({
    type: "content:state:update",
    state: store.state,
  } as ClientMessage);

  port.onMessage.addListener((message: BackgroundMessage) => {
    log(`Received message [${message.type}]`, { message });

    const audioNotification = createAudioNotifier();

    const watcher = createWatcher({
      onTimestampsUpdate: (foundSponsoredTimestamps) => {
        updateStoreAndNotify({ foundSponsoredTimestamps });
      },
      onSponsoredTimestampEnter: () => {
        audioNotification.play();
      },
    });

    const sendMessage = (message: ClientMessage) => {
      if (!isPortConnected) {
        log("Port disconnected, ignoring message", { message });
        return;
      }
      port.postMessage(message);
    };

    const updateStoreAndNotify = (delta: Partial<ClientState>) => {
      // TODO: replace with an observable

      store.set(delta);
      const message: ClientMessage = {
        type: "content:state:update",
        state: store.state,
      };

      sendMessage(message);

      // !: hack, replace with an observable subscription
      triggerBadgeUpdate(store.state, (message) => {
        try {
          chrome.runtime.sendMessage(message);
        } catch (err) {
          log("Failed to send message to background", { err });
        }
      });
    };

    if (message.type === "content:enable-blocker") {
      updateStoreAndNotify({ isBlockerEnabled: true });

      watcher.start(message.openAIAPIKey);
    }

    if (message.type === "content:disable-blocker") {
      // TODO: stop watcher instead of reloading the page

      window.location.reload();
      // updateStoreAndNotify({ isBlockerEnabled: false });
    }
  });

  port.onDisconnect.addListener(() => {
    isPortConnected = false;
    log("Port disconnected");
  });
});
