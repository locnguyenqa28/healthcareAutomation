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
  assertUrl(text) {
    cy.url()
      .should('contain',text)
  }
  assertPrivacyPolicy() {
    cy.get('[href="https://www.sonicpathology.com.au/media/6069/shap-privacy-policy-202203.pdf"]')
      .should('be.visible')
  }
  visitPageAndLogin(userName, password){
    this.visitPage();
    this.inputUserName(userName);
    this.inputPassword(password);
    this.clickLoginButton();
  }

}
