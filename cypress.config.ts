import { defineConfig } from "cypress";
import viteConfig from "./vite.config";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
