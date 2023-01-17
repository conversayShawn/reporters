const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporter: "cypress-qase-reporter",
  reporterOptions: {
    logging: true,
    runComplete: false,
    projectCode: "cypress.config.js",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("after:run", (spec, results) => {
        console.log("Working");
      });
    },
  },
});
