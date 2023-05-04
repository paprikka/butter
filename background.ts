import { initAutoUpdater } from "./src/auto-updater";
import { log } from "./src/log";
import { ClientMessage } from "./src/extension-message";
log("init");

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("first-run.html") });
});

initAutoUpdater();

chrome.runtime.onMessage.addListener(function (request: ClientMessage, sender) {
  if (request.type === "action:update-badge") {
    if (request.text) {
      chrome.action.setBadgeText({
        text: request.text,
        tabId: sender.tab?.id,
      });
    }

    if (request.color) {
      chrome.action.setBadgeBackgroundColor({
        color: request.color,
        tabId: sender.tab?.id,
      });
    }
  }

  return true;
});
