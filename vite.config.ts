import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/elna-chat-widget.ts",
      name: "@amalendu123/chat-widget",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
});
