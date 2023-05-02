import { TabStatus } from "./tab-status";
import { SponsoredTimestamp } from "./watcher/detector";

export type ClientState = {
  tabStatus: TabStatus;
  isBlockerEnabled: boolean;

  foundSponsoredTimestamps: SponsoredTimestamp[];
};

export type ClientStore = {
  set: (delta: Partial<ClientState>) => void;

  state: ClientState;
};

export const defaultState: ClientState = {
  tabStatus: "idle",
  isBlockerEnabled: false,

  foundSponsoredTimestamps: [],
};

export const makeStore = (): ClientStore => ({
  state: { ...defaultState },

  set(delta: Partial<ClientState>) {
    Object.assign(this.state, delta);
  },
});
