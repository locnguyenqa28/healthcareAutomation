import user from "../support/constants"
Cypress.Commands.add('saveDraft', (
    userName = user.username,
    pass = user.password,
    firstname ='I am API'
  ) => {
        cy.request({
            method: 'POST',
            url: `/api/auth?username=${userName}&password=${pass}`,
        }).then((auth)=>{
            cy.log(auth.body)
            const temp = auth.body.split(`<authkey>`)[1]
            const authKey = temp.split(`</authkey>`)
            cy.log(`Authen Key: ${authKey[0]}`)
            cy.request({
                method: 'POST',
                url: `/api/createdraft?authkey=${authKey[0]}&firstname=${firstname}&title=Mr&lastname=Automation&gender=F&medicarenumber=2123-45670-1&dob=23/01/1969&address=test addd&city=01&patientfinancial=D&postcode=111&state=ACT&phone=123456`,
                body :{
                }
            }).then(($res) => cy.log(`Data: ${Object.values($res.body)}`))
        });
  });
Cypress.Commands.add('loginAPI', (
    userName = user.username,
    pass = user.password,
  ) => {
        cy.request({
            method: 'POST',
            url: `/api/auth?username=${userName}&password=${pass}`,
        });
  });

Cypress.Commands.add('getclinicByIDNoAuth', (id) => {
        cy.request({
            method: 'GET',
            url: `users/getclinnicbyid?id=${id}`,
            body:{
            }
        }).then((res) => 
        {
            cy.log(`Response: ${res.body}`).then(() => expect(res.status).not.to.eq(200));
            
        });
  });

Cypress.Commands.add('getclinicByOpenLinkIDNoAuth', (id) => {
        cy.visit(`users/getclinnicbyid?id=${id}`).then((res) => 
        {
            cy.wait(500);
            cy.log(`Check the link: users/getclinnicbyid?id=${id}`)
            cy.get('body').then(($body) => {
                if($body.find('#notice').length > 0) {
                    cy.get('#notice')
                    .contains('Please login.');
                } else {
                    cy.get('body').containss('The change you wanted was rejected');
                }
            })
        });
  });

Cypress.Commands.add('sqlInjection', (sqlRequest) => {
        cy.request({
            method: 'POST',
            url: `https://sonic-test.ederm.com.au:443${sqlRequest}`,
            body:{
            },
            failOnStatusCode: false,
        }).then((res) => 
        {
            cy.log(`Response: ${res.body}`).then(() => expect(res.status).not.to.eq(200));
            
        });
  });

Cypress.Commands.add('sqlInjectionNotice', (sqlRequest) => {
        cy.request({
            method: 'POST',
            url: `https://sonic-test.ederm.com.au:443${sqlRequest}`,
            body:{
            },
            failOnStatusCode: false,
        }).then((res) => 
        {
            cy.wait(1000);
            cy.get('body').then(($body) => {
                if($body.find('#notice').length > 0) {
                    cy.get('#notice')
                    .contains('Please login.');
                } else {
                    cy.log(`Response: ${res.body}`).then(() => expect(res.body).to.be.contain('The change you wanted was rejected'));
                }
            })
        });
  });

Cypress.Commands.add('sqlInjectionStatus200CommentReject', (sqlRequest) => {
        cy.request({
            method: 'POST',
            url: `https://sonic-test.ederm.com.au:443${sqlRequest}`,
            body:{
            },
            failOnStatusCode: false,
        }).then((res) => 
        {
            cy.log(`Response: ${res.body}`).then(() => expect(res.body).to.be.contain('The change you wanted was rejected'));
            
        });
  });