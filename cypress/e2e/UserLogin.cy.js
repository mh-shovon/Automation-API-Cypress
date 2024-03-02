const envVariable = require('../fixtures/envVariable.json');
describe('Testing User login functionality', () => {
  it('Login with valid credentials', () => {
    cy.request({
        method: 'POST',
        url: envVariable.baseUrl + '/user/login',
        body: {
          "email": "salman@roadtocareer.net",
          "password": "1234"
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        var token = response.body.token;
        envVariable.token = token;
        cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable));
      });
  })
})