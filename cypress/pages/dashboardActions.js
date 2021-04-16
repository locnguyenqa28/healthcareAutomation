import { CommonActions } from "./commonAction";

export class DashboardActions extends CommonActions
{
  clickAddNewLesion(){
      cy.get('a[href="/cases?urgent=1"]')
        .contains('Submit New Lesion').click()
  }

  selectTitle(){
      cy.get('select[id="temptitle"]')
        .select('Mrs')
  }
  
  enterFirstName(firstname){
      cy.get('input[id="case_FirstName"]')
        .type(firstname)
  }

  enterLastName(lastname){
      cy.get('input[id="case_LastName"]')
        .type(lastname)
  }

  selectGenderM(){
      cy.get('input[value="m"]')
        .click()
  }

  selectGenderF(){
      cy.get('input[value="f"]')
        .click()
  }

  enterDOB(DOB){
      cy.get('input[id="case_DOB"]')
        .type(DOB)
  }

  enterHomeAdd(address){
      cy.get('input[id="case_Address"]')
        .type(address)
  }

  enterCity(city){
      cy.get('input[id="case_suburb"]')
        .type(city)
  }

  selectState(){
      cy.get('select[id="case_patientstate"]')
        .select('NSW')
  }

  enterPostcode(postcode){
      cy.get('input[id="case_PostCode"]')
        .type(postcode)
  }

  enterContact(contact){
      cy.get('input[id="case_NotificationPhone"]')
        .type(contact)
  }

  enterMedicare(medicare){
      cy.get('input[id="case_NHS"]')
        .type(medicare)
  }

  saveDraft(){
      cy.get('a[class="docnavright2"]')
        .contains('Save draft » ').click()
  }
  nextButton(){
      cy.get('a[class="docnavright"]')
        .contains('Next »').click()
  }

  //Clinical Condition
  addBodyMap(){
    cy.get('a[id="goodlink"]')
      .click()
  }

  noPreviousHistory(){
      cy.get('input[id="important_1"]')
        .click()
  }
  provisionalDiagnosis(){
    cy.get('select[id="ProvisionalDiagnosis"]')
      .select('BCC (Basal Cell Carcinoma)')
  }
  excludeMelasma(){
    cy.get('[id="ExcludeMelanoma_1"]')
      .click()
  }
  excludeNmsc(){
    cy.get('[id="ExcludeNMSC_1"]')
      .click()
  }
  selectBiopsyType(){
    cy.get('select[id="BiopsyType"]')
      .select('O (Other)')
  }
  clickImage(){
    cy.get('img[id="showimaged"]')
      .click()
  }
  clickRIghtHand(){
      cy.get('div[style="top: 389px; left: 534px;"]')
        .click()
  }

  selectBodyRegion(){
      cy.get('select[id="BodyMapRegion"]')
      .eq(0)
      .select('Neck', {force: true})
  }

  enterSpecimenLocation(){
      cy.get('textarea[id="specimenLocation"]')
        .type('Test Location')
  }

  saveBodyMap(){
      cy.get('button[id="uploadbodylayoutupdate"]')
        .click()
  }

  //Upload Dermascopic Images
  uploadImage(){
      cy.get('input[type="file"]')
        .attachFile('ederm.png')
  }
  startUpload(){
    cy.get('[type="submit"]')
      .click()
  }
  isImageUploadedSuccessfully(){
    cy.get('td[class="preview"]')
      .should('be.visible')
  }
  nextButtonUploadImg(){
    cy.get('a[id="showlinkshow"]')
      .click()
  }

  //Case Summary
  caseSummary(){
    cy.get('a[class="addlesion"]')
      .contains('Case summary >>').click()
  }
  submitCasePrint(){
    cy.get('[class="docnavright submit1"]')
      .contains('Submit case & print »').click()
  }
  returnToDashboard(){
    cy.get('a[href="/cases/dashboard"]')
      .click()
  }
}
