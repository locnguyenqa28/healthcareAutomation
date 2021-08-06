import { CommonActions } from "./commonAction";
import user from "../support/constants";

export class ClinicActions extends CommonActions
{
  isModal(text = 'Add new clinic') {
    cy.get('.modal')
    .contains(text)
    .should('be.visible');
  }

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

  selectClinicLab(option = 'Barratt and Smith Pathology'){
    cy.get('#clinic_laboratory')
      .select(option)
  }

  selectClinicState(option = user.state[0]){
    cy.get('#clinic_state')
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

  isClinicName(name, timeOut = 500){
    cy.wait(timeOut)
    cy.get('.hasdata')
    .first()
    .contains(name)
    .should('be.visible')
  }

  isClinicNameNotVisible(name){
    cy.wait(500)
    cy.get('.hasdata')
    .last()
    .should('not.contain.text',name)
  }

  isClinicNameNotExist(name){
    cy.wait(500)
    cy.get('.hasdata')
    .last()
    .should('not.contain.text',name)
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
    cy.get('[id*="data_clinic"] td>span')
    .eq(index)
    .should('have.text', isAactive)
  }

  reloadClinicPage() {
    cy.reload()
  }

  clickAddNewClinic(isForce=false) {
    cy.get('[href="#ex1"]')
    .should('be.visible')
    .click({force:isForce})
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
}

