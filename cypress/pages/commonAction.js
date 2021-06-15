export class CommonActions {
  visitPage() {
    cy.visit('');
  }

  uploadImage(){
    cy.get('input[type="file"]')
      .attachFile('1.jpg')
  }
  assertText(text){
    cy.get('body')
    .contains(text)
    .should('be.visible')
  }
  assertNoText(text){
    cy.get('body')
    .should('not.contain.text',text)
  }
  assertTitle(text){
    cy.get('.txt-header')
    .contains(text)
    .should('be.visible')
  }
  assertButton(text){
    cy.get('[onclick]')
    .contains(text)
    .should('be.visible')
  }
  clickButtonByText(text){
    cy.get('[onclick]')
    .contains(text)
    .click()
  }
  clickHrefByText(text){
    cy.get('[href]')
    .contains(text)
    .click()
  }
  assertFile(fileName){
    cy.get(`a[download="${fileName}"]`)
    .should('be.visible')
  }
  randomAlphanumeric(length) {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }

  randomNumberic(length) {
    const result           = [];
    const characters       = '0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }

  randomAlpha(length) {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }
}
