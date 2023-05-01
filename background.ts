import { initAutoUpdater } from "./src/auto-updater";
import { log } from "./src/log";

log("init");

chrome.storage.local.get(["is-first-run"], (result) => {
  if (result["is-first-run"] === undefined) {
    log("first run, opening first-run.html");
    chrome.storage.local.set({ "is-first-run": true });
    chrome.tabs.create({ url: chrome.runtime.getURL("first-run.html") });

    return;
  }

  log("not first run, skipping first-run.html");
});

initAutoUpdater();
