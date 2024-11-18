/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/triptreasure",
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    include: ["./src/tests/**/*.test.tsx"],
    globals: true,
  },
});
