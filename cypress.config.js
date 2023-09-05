const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jht61v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
