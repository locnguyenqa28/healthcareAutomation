export class CommonActions {
  visitPage() {
    cy.visit('');
  }
  
  activeSingleAccountLogin(isDeActive =  1) {
    const chkSingleAccount = `[name="ativeonelogin"][value="${isDeActive}"]`;
    cy.get('[action="/admins/saveativeonelogin"]')
      .should('be.visible')
      .then(($item) => {
        if($item.find(chkSingleAccount).length > 0) {
          cy.get(chkSingleAccount)
            .click()
            .get('[action="/admins/saveativeonelogin"] [type="submit"]')
            .click()
        }else {
          isDeActive === 0 ? cy.log('Already de-Active single Account mode') : cy.log('Already Active single Account mode');
        }
      })  
      .get('a[href="/logout"]')
      .click()
      .wait(1000);
  }

  visitDashboard() {
    cy.visit('https://sonic.ederm.com.au/cases/dashboard');
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
  
  assertTextIsNotExist(text){
    cy.get('body')
    .contains(text)
    .should('not.exist')
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

 verifyElementContainsText(element, text) {
   cy.get(element)
    .contains(text)
    .should('be.visible')
 }

 assertListText(list){
    for (const item of list){
      cy.get('body')
      .contains(item)
      .should('be.visible')
    }
  }

 convertMedicareWithSymbol(text, cha =  '-'){
    return text.slice(0, 3) + cha + text.slice(4,7) + cha + text.slice(7);
  }

    
  setTimeoutSession(number =  1) {
    cy.get('input#timeoutsession')
    .clear()
    .type(number);
    cy.get('input#timeoutsession')
      .parents('td')
      .find('[type="submit"]')
      .click()  
  }
    
  setTimeoutLogin(number =  1) {
    cy.get('input#timeoutlogin')
    .clear()
    .type(number);
    cy.get('input#timeoutlogin')
      .parents('td')
      .find('[type="submit"]')
      .click()  
  }
    
  assertInputValue(value) {
    cy.get('input')
    .invoke('val')
    .then(text => expect(text).contains(value));
  }
}
