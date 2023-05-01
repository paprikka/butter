import { log } from "./log";

export const initAutoUpdater = () => {
  log("initAutoUpdater");
  const loop = async () => {
    const currentTS = await fetch("./.timestamp").then((_) => _.json());

    while (true) {
      log("checking for updates...");
      const newTS = await fetch("./.timestamp")
        .then((_) => _.json())
        .catch(() => "unknown");
      if (newTS === "unknown" || newTS === currentTS) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        log(`new update found! ${new Date(currentTS)} -> ${new Date(newTS)}`);
        chrome.runtime.reload();
        return;
      }
    }
  };

  loop();
};
