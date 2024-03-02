const envVariable = require('../fixtures/envVariable.json');
const user = require('../fixtures/user.json');

describe('Deleting user', () => {
   it("Deleting user by Id", () => {
    cy.request({
        method: 'DELETE',
        url: envVariable.baseUrl + '/user/delete/' + user.userId,
        headers: {
            'Authorization': envVariable.token,
            'X-AUTH-SECRET-KEY': envVariable.secretKey
        }
    }).then((response) => {
        expect(response.status).eq(200);
        cy.writeFile('cypress/fixtures/user.json', response.body);
    })
   })
})