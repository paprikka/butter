import { render } from "preact";
import { useEffect } from "preact/hooks";
import { log } from "../log";
import { createAppState } from "./state";
import { LoadingView } from "./views/loading";
import { MissingAPIKeyView } from "./views/missing-api-key";
import { ReadyView } from "./views/ready";

const appState = createAppState();
const App = () => {
  useEffect(() => {
    log("Init popup");
  }, []);

  if (appState.step.value === "loading") {
    return <LoadingView appState={appState} />;
  }

  if (appState.step.value === "missing-api-key") {
    return <MissingAPIKeyView appState={appState} />;
  }

  if (appState.step.value === "ready") {
    return <ReadyView appState={appState} />;
  }

  return null;
};

render(<App />, document.getElementById("root")!);
