import user from "../support/constants"
Cypress.Commands.add('saveDraft', (
    userName = user.username,
    pass = user.password,
    firstname ='I am API'
  ) => {
        cy.request({
            method: 'POST',
            url: `/api/auth`,
            body:{
                username: userName,
                password: pass
            }
        }).then((auth)=>{
            const temp = auth.body.split(`<authkey>`)[1]
            const authKey = temp.split(`</authkey>`)
            cy.log(`Authen Key: ${authKey[0]}`)
            cy.request({
                method: 'POST',
                url: `/api/createdraft?authkey=${authKey[0]}&firstname=${firstname}&title=Mr&lastname=Automation&gender=F&medicarenumber=2123-45670-1&dob=23/01/1969&address=test addd&city=01&patientfinancial=D&postcode=111&state=ACT&phone=123456`,
                body :{
                }
            });
        });
  });