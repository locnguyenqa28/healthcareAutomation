import { CommonActions } from "./commonAction";

export class LoginActions extends CommonActions{
  inputUserName(userName) {
    cy.get('input[id="name"]')
      .type(userName)
  }

  inputPassword(password) {
    cy.get("input[id='password']")
      .type(password)
  }
  clickLoginButton() {
    cy.get('button[name="commit"]')
      .click()
  }

}
