const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6k3yms',
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  failOnStatusCode: false,
  env: {
    base: 'https://sonic-test.ederm.com.au/',
    beta: 'http://localhost:3000',
    allureResultsPath: 'report/results',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sonic-test.ederm.com.au',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
