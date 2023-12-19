import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    VITE_TEST_BACKEND_URL: "http://localhost:3000",
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
