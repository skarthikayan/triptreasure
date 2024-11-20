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
    setupFiles: ["./src/__tests__/setup.ts"],
    include: ["./src/__tests__/**/*.test.tsx"],
    globals: true,
  },
});
