import { log } from "./log";

export const initAutoUpdater = (useSoftReload = false) => {
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
        if (useSoftReload) {
          window.location.reload();
        } else {
          chrome.runtime.reload();
        }
        return;
      }
    }
  };

  loop();
};
