console.log("background script loaded!");
chrome.storage.local.get(["is-first-run"], (result) => {
  if (result["is-first-run"] === undefined) {
    // chrome.storage.local.set({ "is-first-run": true });
    chrome.tabs.create({ url: chrome.runtime.getURL("first-run.html") });
  }
});
// chrome.runtime.onInstalled.addListener(({ reason }) => {
//   console.log("background script installed", { reason });
//   if (reason !== "install") return;
//   chrome.storage.local.get(["is-first-run"], (result) => {
//     if (result["is-first-run"] === undefined) {
//       // chrome.storage.local.set({ "is-first-run": true });
//       chrome.tabs.create({ url: chrome.runtime.getURL("first-run.html") });
//     }
//   });
// });
