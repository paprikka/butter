import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        popup: "popup.html",
        background: "background.ts",
        "first-run": "first-run.html",
      },

      output: {
        dir: "dist",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
  optimizeDeps: {
    include: ["preact"],
  },
});
