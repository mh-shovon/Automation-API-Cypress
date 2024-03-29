const envVariable = require('../fixtures/envVariable.json');

describe('Getting the user list', () => {
   it("Show user list", () => {
    cy.request({
        method: 'GET',
        url: envVariable.baseUrl + '/user/list',
        headers: {
            'Authorization': envVariable.token
        }
    }).then((response) => {
        expect(response.status).eq(200);
        cy.console.log(response.body);
        cy.writeFile('cypress/fixtures/userList.json', response.body);
    })
   })
})