import { ClientState } from "./client-state";

export type ClientMessage =
  | {
      type: "content:state:update";
      state: ClientState;
    }
  | {
      type: "action:update-badge";
      text?: string;
      color?: string;
    };

export type BackgroundMessage =
  | {
      type: "content:enable-blocker";
      openAIAPIKey: string;
    }
  | {
      type: "content:disable-blocker";
    };
