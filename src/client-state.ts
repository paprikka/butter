import { TabStatus } from "./tab-status";

export type ClientState = {
  tabStatus: TabStatus;
  isBlockerEnabled: boolean;
};

export type ClientStore = {
  set: (delta: Partial<ClientState>) => void;

  state: ClientState;
};

export const defaultState: ClientState = {
  tabStatus: "idle",
  isBlockerEnabled: false,
};

export const makeStore = (): ClientStore => ({
  state: { ...defaultState },

  set(delta: Partial<ClientState>) {
    Object.assign(this.state, delta);
  },
});
