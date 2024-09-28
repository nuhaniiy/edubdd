const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify_preprocessor_1 = require("@badeball/cypress-cucumber-preprocessor/browserify");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
    supportFile: false,
  },
});
