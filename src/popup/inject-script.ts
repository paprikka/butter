export const injectScript = async (path: string) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab && activeTab.id) {
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: [path],
        },
        (injectionResults) => {
          if (chrome.runtime.lastError) {
            console.error(
              `Error injecting script: ${chrome.runtime.lastError.message}`
            );
            return;
          }
          console.log("Script injected successfully:", injectionResults);
        }
      );
    }
  });
};
