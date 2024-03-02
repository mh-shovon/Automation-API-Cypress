const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  //video: true,git 
  e2e: {
    //watchForFileChanges : false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/UserLogin.cy.js',
        'cypress/e2e/GetUserList.cy.js',
        'cypress/e2e/CreateUser.cy.js',
        'cypress/e2e/DeleteUser.cy.js'
      ]
      return config;
    },
  },
});
