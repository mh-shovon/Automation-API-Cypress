import { toLength } from 'cypress/types/lodash';
import { baseUrl, token, secretKey } from '../fixtures/envVariable.json';
import Utility from '../fixtures/Utility';
import { faker } from '@faker-js/faker';

describe('Creating user', () => {
   const utility = new Utility();
   const randomFirstName = faker.name.firstName();
   const randomLastName = faker.name.lastName();
   const randomFullName = randomFirstName + ' ' + randomLastName;
   const randomEmail = randomFirstName + utility.randomId(1000, 999);
   const password = 'P@ssword123';
   const randomPhoneNumber = '019' + utility.randomId(10000000, 99999999);
   const randomNid = (utility.randomId(1000000000, 9999999999).toString());
   it('Create a user', () => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/user/create',
        headers: {
            'Authorization': token,
            'X-AUTH-SECRET-KEY': secretKey
        },
        body: {
            "name": randomFullName,
            "email": randomEmail,
            "password": password,
            "phone_number": randomPhoneNumber,
            "nid": randomNid,
            "role": "Customer"
        }
    }).then((response) => {
        expect(response.status).eq(201);
        cy.writeFile('cypress/fixtures/userList.json', response.body);
    })
   })

})