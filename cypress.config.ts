import { defineConfig } from "cypress";
import { getConfigurationByFile } from "./cypress/support/pages/ConfigPage";


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'production'
      return getConfigurationByFile(file)
    },

    baseUrl: 'https://helion.pl',
    retries: {
      "runMode": 1,
      "openMode": 1
    },
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
