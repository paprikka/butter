import { ClientState, makeStore } from "./client-state";
import { BackgroundMessage, ClientMessage } from "./extension-message";
import { log } from "./log";
import { wait } from "./wait";
import { createWatcher } from "./watcher";

log("content script loaded");

const store = makeStore();

chrome.runtime.onConnect.addListener((port) => {
  log("Port connected");

  port.postMessage({
    type: "content:state:update",
    state: store.state,
  } as ClientMessage);

  port.onMessage.addListener((message: BackgroundMessage) => {
    log(`Received message [${message.type}]`, { message });

    const watcher = createWatcher();

    const sendMessage = (message: ClientMessage) => {
      port.postMessage(message);
    };

    const updateStoreAndNotify = (delta: Partial<ClientState>) => {
      store.set(delta);
      sendMessage({
        type: "content:state:update",
        state: store.state,
      });
    };

    if (message.type === "content:enable-blocker") {
      wait(1000).then(() => {
        updateStoreAndNotify({ isBlockerEnabled: true });
        watcher.start(message.openAIAPIKey);
      });
    }

    if (message.type === "content:disable-blocker") {
      wait(1000).then(() => {
        updateStoreAndNotify({ isBlockerEnabled: false });
      });
    }
  });

  port.onDisconnect.addListener(() => {
    log("Port disconnected");
  });
});
