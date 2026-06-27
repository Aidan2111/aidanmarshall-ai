import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// The site is served from the root of the custom domain (aidanmarshall.ai),
// so assets resolve from "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});
