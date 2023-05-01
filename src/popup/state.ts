import { signal } from "@preact/signals";

export const createAppState = () => {
  const openAIAPIKey = signal("");
  const step = signal<"loading" | "ready" | "missing-api-key">("loading");

  return {
    openAIAPIKey,
    step,
  };
};

export type AppState = ReturnType<typeof createAppState>;
