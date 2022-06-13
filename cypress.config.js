const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/*.feature',
    supportFile: false,
  }
})