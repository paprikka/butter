import { log } from "./log";

export const registerDebugTool = (tool: any) => {
  if (!(window as any).sonnet) {
    (window as any).sonnet = {};
  }

  log("Registering debug tool");
  Object.assign((window as any).sonnet, tool);
};
