import { ClientState } from "./client-state";
import { ClientMessage } from "./extension-message";
import { log } from "./log";

export const triggerBadgeUpdate = (
  clientState: ClientState,
  publish: (message: ClientMessage) => void
) => {
  log("triggerBadgeUpdate", { clientState });
  if (clientState.tabStatus === "processing") {
    publish({
      type: "action:update-badge",
      text: clientState.foundSponsoredTimestamps.length.toString() || "...",
      color: "blue",
    });
    return;
  }
  if (clientState.isBlockerEnabled) {
    publish({
      type: "action:update-badge",
      text: clientState.foundSponsoredTimestamps.length.toString() || "on",
      color: "green",
    });
    return;
  } else {
    publish({
      type: "action:update-badge",
      text: "off",
      color: "#333",
    });
    return;
  }
};
