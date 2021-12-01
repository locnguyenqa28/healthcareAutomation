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
  
  assertTextIsNotVisible(text){
    cy.get('body')
    .contains(text)
    .should('not.visible')
  }
  assertButton(text){
    cy.get('[onclick]')
    .contains(text)
    .should('be.visible')
  }
  assertElement(element){
    cy.get(element)
    .should('be.visible')
  }
  assertElementNotExist(element){
    cy.get(element)
    .should('not.be.exist')
  }
  clickButtonByText(text){
    cy.get('[onclick]')
    .contains(text)
    .click()
  }
  clickHrefByText(text, isForce = false){
    cy.get('[href]')
    .contains(text)
    .click({ force: isForce });
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

  okDialog() {
    cy.on('window:confirm', () => true);
  }

  assertAlert(text) {
    cy.on('window:alert',(txt)=>{
      //Mocha assertions
      expect(txt).to.contains(text);
   })
  }

 getValueSelection(locator) {
  cy.get(locator).then($options => {
    return Cypress._.map($options, ($option) => $option.innerText)
  })   
 }

 assertPlaceholder(text) {
  cy.get(`[placeholder='${text}']`)
  .should('be.visible')
 }
 wait(number) {
  cy.wait(number);
 }
}
