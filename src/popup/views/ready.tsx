import { AppState } from "../state";

export const ReadyView = ({ appState }: { appState: AppState }) => {
  return (
    <div>
      <h1>Ready</h1>
      <button onClick={() => (appState.step.value = "missing-api-key")}>
        Options
      </button>
    </div>
  );
};
