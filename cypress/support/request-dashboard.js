import user from "../support/constants"
Cypress.Commands.add('saveDraft', (
    userName = user.username,
    pass = user.password,
  ) => {
    cy.log('Save a draft by API');
    cy.request({
      method: 'GET',
      url: `/`,
      headers: {
      }
    }).then((response) => {
        const text = response.body.split(`"csrf-token" content="`)[1];
        const token = text.split(`"/>`)
        cy.log(`TOKEN: ${token[0]}`)
        cy.log(`Request Login to ${userName} ${pass}`)
        cy.request({
            method: 'POST',
            url: `/login/check_login`,
            headers: {
            },
            body :{
                authenticity_token: token[0],
                name: userName,
                password: pass,
                commit:''
            }
        }).then((res) => {
            const textLogin = res.body.split(`"csrf-token" content="`)[1];
            const tokenLogin = textLogin.split(`"/>`)
            cy.log(`Token Login: ${tokenLogin[0]}`)
            cy.log('Go to Patient')
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
                cy.log(authKey[0])
                cy.request({
                    method: 'POST',
                    url: `https://sonic.ederm.com.au/api/createdraft?authkey=${authKey[0]}&firstname=I am api &title=Mr&lastname=Automation&gender=F&medicarenumber=2123-45670-1&dob=11/11/1990&address=test addd&city=01&patientfinancial=D&postcode=111&state=ACT&phone=123456`,
                    body :{
                    }
                });
            });
        });

    });
  });