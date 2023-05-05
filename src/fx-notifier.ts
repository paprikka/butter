import { registerDebugTool } from "./debug-tools";

export const createFXNotifier = () => {
  const ui = document.createElement("div");
  ui.classList.add("sonnet-fx-notifier");
  ui.innerText = "Skipping sponsored content...";
  document.body.appendChild(ui);

  const trigger = () => {
    ui.classList.add("sonnet-fx-notifier--is-visible");

    setTimeout(
      () => ui.classList.remove("sonnet-fx-notifier--is-visible"),
      3000
    );
  };
  return { trigger };
};

registerDebugTool({ createFXNotifier });
