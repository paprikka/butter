import { ClientState } from "./client-state";

export type ClientMessage = {
  type: "content:state:update";
  state: ClientState;
};

export type BackgroundMessage =
  | {
      type: "content:enable-blocker";
    }
  | {
      type: "content:disable-blocker";
    };
