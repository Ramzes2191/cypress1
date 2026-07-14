const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 0,
  allowCypressEnv: false,

  e2e: {
    viewportWidth: 1280, // ширина по умолчанию
    viewportHeight: 720,  // высота по умолчанию
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
