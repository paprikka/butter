import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        popup: "popup.html",
        background: "background.ts",
        "content-loader": "content-loader.ts",
        "first-run": "first-run.html",
      },

      output: {
        amd: { id: "sonnet-yt-content-remover" },
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
