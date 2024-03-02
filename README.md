To initial npm--->

mpm init -y

Install Cypress--->

npm install cypress --save-dev

Run cypresee(headless mode to record video and creating report)--->

npx cypress run

Cypress-mochawesome-reporter---> npm i --save-dev cypress-mochawesome-reporter

Edit Confg file--->

const { defineConfig } = require('cypress');

module.exports = defineConfig({ reporter: 'cypress-mochawesome-reporter', [Add this] e2e: { setupNodeEvents(on, config) { require('cypress-mochawesome-reporter/plugin')(on); [Add this] config.specPattern = [ [Test File list] 'cypress/e2e/LoginTest.cy.js', 'cypress/e2e.AddToCart.cy.js' ] }, }, });

Import at e2e.js file in support folder--->

import 'cypress-mochawesome-reporter/register';
