import { CommonActions } from "./commonAction";
import user from "../support/constants";

export class ClinicActions extends CommonActions
{
  isModal(text = 'Add new clinic') {
    cy.get('.modal')
    .contains(text)
    .should('be.visible');
  }

  enterClinicName(name) {
    cy.get('#clinic_clinicname')
    .clear()
    .type(name)
  }

  enterClinicEditName(name) {
    cy.get('#edit_clinic_clinicname')
    .clear()
    .type(name)
  }

  enterClinicEditProviderNumber(text) {
    cy.get('#edit_clinic_providernumber')
    .clear()
    .type(text)
  }

  isProviderNumberRed() {
    cy.get('#edit_text_clinic_providernumber')
    .invoke('attr', 'style')
    .should('eq','color:red !important')
  }

  enterClinicEditEmail(text) {
    cy.get('#edit_clinic_email')
    .clear()
    .type(text)
  }

  isEmailRed() {
    cy.get('#edit_text_clinic_email')
    .invoke('attr', 'style')
    .should('eq','color:red !important')
  }
  
  selectClinicLab(option = 'Barratt and Smith Pathology'){
    cy.get('#clinic_laboratory')
      .select(option)
  }

  getEditLabOption(){
    return cy.get('#edit_clinic_laboratory option')
      .then((options) => {return [...options].map(o => o.text);})
  }

 selectEditLabOption(option){
    cy.get('#edit_clinic_laboratory')
      .select(option)
  }

  selectClinicState(option = user.state[0]){
    cy.get('#clinic_state')
      .select(option)
  }

  selectEditClinicState(option = user.state[0]){
    cy.get('#edit_clinic_state')
      .select(option)
  }

  enterClinicProvidernumber(text = `${this.randomAlphanumeric(10)}`){
    cy.get('#clinic_providernumber')
    .clear()
    .type(text)
  }

  enterClinicNumber(text = `${this.randomAlphanumeric(10)}`){
    cy.get('#clinic_clinicnumber')
    .clear()
    .type(text)
  }
  
  enterClinicAddress(address = `${this.randomAlphanumeric(10)}`){
    cy.get('#clinic_address')
      .clear()
      .type(address)
  }
  
  enterEditClinicAddress(address = `${this.randomAlphanumeric(10)}`){
    cy.get('#edit_clinic_address')
      .clear()
      .type(address)
  }
  
  enterClinicSubhub(sub = user.city){
    cy.get('#clinic_suburb')
      .clear()
      .type(sub)
  }
  
  enterClinicPostcode(postcode = user.postcode){
    cy.get('#clinic_postcode')
      .clear()
      .type(postcode)
  }
 
  enterClinicPhone(phone = `${this.randomAlpha(10)}`){
    cy.get('#clinic_phone')
    .clear()
    .type(phone)
  }
 
  enterClinicMobilePhone(phone = `${this.randomAlpha(10)}`){
    cy.get('#clinic_mobilephone')
    .clear()
    .type(phone)
  }
 
  
  enterEditClinicSubhub(sub = user.city){
    cy.get('#edit_clinic_suburb')
      .clear()
      .type(sub)
  }
  
  enterEditClinicPostcode(postcode = user.postcode){
    cy.get('#edit_clinic_postcode')
      .clear()
      .type(postcode)
  }
 
  enterEditClinicPhone(phone = `${this.randomAlpha(10)}`){
    cy.get('#edit_clinic_phone')
    .clear()
    .type(phone)
  }
 
  enterEditClinicMobilePhone(phone = `${this.randomAlpha(10)}`){
    cy.get('#edit_clinic_mobilephone')
    .clear()
    .type(phone)
  }
 
  enterClinicEmail(email = 'a@a.a'){
    cy.get('#clinic_email')
    .clear()
    .type(email)
  }

  clickSaveClinic(){
    cy.get('#rmsaveaddnewclinic')
    .click()
  }

  clickSaveEditClinic(){
    cy.get('#rmsaveeditclinic')
    .click()
  }

  isClinicName(name, index = 0, timeOut = 500){
    cy.wait(timeOut)
    cy.get('.hasdata')
    .eq(index)
    .contains(name)
    .should('be.visible')
  }

  isClinicNameNotVisible(name){
    cy.wait(500)
    cy.get('.hasdata')
    .last()
    .should('not.contain.text',name)
  }

  isClinicNameNotExist(name, index = 0){
    cy.wait(500)
    cy.get('.hasdata')
    .eq(index)
    .should('not.contain.text',name)
  }

  isFirstClinicNameExist(name){
    cy.wait(2000)
    cy.get('.hasdata')
    .first()
    .should('contain.text',name)
  }

  isFirstClinicNameNotExist(name){
    cy.wait(500)
    cy.get('.hasdata')
    .first()
    .should('not.contain.text',name)
  }

  isClinicTable(){
    cy.get('#shodataclinicuser')
    .should('be.visible')
  }

  clickLastEditClinicButton(){
    cy.get('[onclick*=getclinnicbyid]')
    .last()
    .click()
  }

  clickFirstEditClinicButton(){
    cy.get('[onclick*=getclinnicbyid]')
    .first()
    .click()
  }

  clickEditClinicButtonByIndex(index = 0){
    cy.get('[onclick*=getclinnicbyid]')
    .eq(index)
    .click()
  }

  clickFirstInactiveClinicButton(isForce = false) {
    cy.get('[onclick*=deleteclinic]')
    .first()
    .contains('Disable')
    .click({force:isForce});
  }

  clickFirstActiveClinicButton({force:isForce}) {
    cy.get('[onclick*=deleteclinic]')
    .first()
    .contains('Enable')
    .click(isForce = false)
  }

  assertClinicStatusByIndex(isAactive, index = 0){
    cy.wait(2000)
    cy.get('.hasdata')
    .eq(index)
    .should('contain.text', isAactive)
  }

  reloadClinicPage() {
    cy.reload()
  }

  clickAddNewClinic(isForce=false) {
    cy.get('[href="#ex1"]')
    .should('be.visible')
    .click({force:isForce})
  }

  clickCloseModal(isForce=true) {
    cy.get('body').then(($body) => {
      if($body.find('.close-modal').length > 0) {
        cy.get('.close-modal')
        .should('be.visible')
        .click({force:isForce})
      }
    });
  }

  createMultiClinic(number = 1){
    while(number > 0){
    const clinicName = `Automation-${this.randomAlphanumeric(10)}`;
    this.clickHrefByText('Add new clinic');

    // Clinic modal
    this.isModal('Add new clinic');
    this.enterClinicName(clinicName);
    this.enterClinicProvidernumber();
    this.enterClinicAddress();
    this.enterClinicSubhub();
    this.enterClinicPostcode();
    this.selectClinicLab();
    this.selectClinicState();
    this.enterClinicPhone();
    this.enterClinicMobilePhone();
    this.enterClinicEmail();
    this.clickSaveClinic();

    // Assert clinic
    this.reloadClinicPage();
    this.isClinicTable();
    // this.isClinicName(clinicName); 
    number--;
    }
  }

  editAndVerifyClinicLabByIndex(index = 0) {
    this.getEditLabOption().then((list) => {
      const randomIndex = Math.floor(Math.random() * list.length)
      this.selectEditLabOption(list[randomIndex]);
      this.clickSaveEditClinic();
      cy.wait(1000);
      this.clickCloseModal();
      cy.wait(1000);
      this.isClinicName(list[randomIndex], index);
    })
  }

  editAllValueAndVerifyClinicByIndex(name, providerNumber, address, email,  index = 0) {
    this.getEditLabOption().then((list) => {
      const randomIndex = Math.floor(Math.random() * list.length)
      this.selectEditLabOption(list[randomIndex]);
      this.enterClinicEditName(name);
      this.enterClinicEditProviderNumber(providerNumber);
      this.enterEditClinicAddress(address);
      this.enterClinicEditEmail(email);
      this.enterEditClinicSubhub();
      this.enterEditClinicPostcode();
      this.enterEditClinicPhone();
      this.enterEditClinicMobilePhone();
      this.clickSaveEditClinic();
      cy.wait(1000);
      this.clickCloseModal();
      this.isClinicName(list[randomIndex], index);
      this.isClinicName(name, index);
      this.isClinicName(address, index);
      this.isClinicName(providerNumber, index);
    })
  }

  selectSearchClinicByText(text){
    cy.get('#clinic_search')
    .select(text)
    cy.get('[onclick=" reload();"]')
    .contains('Search')
    .click();
  }

  assertTextClinicOptionByIndex(text, index=0){
    cy.get('select#clinic_search option')
    .eq(index)
    .should('contain.text',text);
  }

  assertTextClinicStateByIndex(text, index=0){
    cy.get('select#clinic_state option')
    .eq(index)
    .should('contain.text',text);
  }
}

