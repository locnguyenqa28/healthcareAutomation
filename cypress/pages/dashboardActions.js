import { CommonActions } from "./commonAction";

export class DashboardActions extends CommonActions
{
  clickAddNewLesion(){
      cy.get('a[href="/cases?urgent=1"]')
        .contains('Create New Pathology Request').click()
  }

  selectTitle(option){
      cy.get('select[id="temptitle"]')
        .select(option)
  }
  
  enterFirstName(firstname){
      cy.get('input[id="case_FirstName"]')
        .type(firstname)
  }

  enterLastName(lastname){
      cy.get('input[id="case_LastName"]')
        .type(lastname)
  }

  selectGender(option){
    cy.get('select[id="case_Gender"]')
      .select(option)
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
      cy.get('a[onclick]')
        .contains('Save draft » ').click()
  }
  nextButton(){
      cy.get('a[class="docnavright"]')
        .contains('Next »').click()
  }

  assertFirstName(firstname){
    cy.get('.x-grid3-col-1').first()
    .contains(firstname)
    .should('be.visible')
  }

  assertLastName(lastname){
    cy.get('.x-grid3-col-2').first()
    .contains(lastname)
    .should('be.visible')
  }

  isReviewCase(status){
    cy.get('.x-grid3-col-4').first()
    .contains(status)
    .should('be.visible')
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
        .attachFile('1.jpg')
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
    cy.get('a[id="showlinkshownextv2"]')
      .click()
  }
  assertTitle(text){
    cy.get('.txt-header')
    .contains(text)
    .should('be.visible')
  }
  assertFile(fileName){
    cy.get(`a[download="${fileName}"]`)
    .should('be.visible')
  }
  //Case Summary
  addAnotherLesion(){
    cy.get('a[class="addlesion"]')
      .contains('Add another lesion').click()
  }
  caseSummary(){
    cy.get('a[class="addlesion"]')
      .contains('Request summary >>').click()
  }
  submitCasePrint(){
    cy.get('[class="docnavright submit1"]')
      .contains('Submit request & print » ').click()
  }
  returnToDashboard(){
    cy.get('a[href="/cases/dashboard"]')
      .click()
  }
  isUploadSuccesfully(index){
    cy.reload()
    cy.get(".x-grid3-cell-last[tabindex='0']")
    .eq(index)
    .contains('Successful')
    .should('be.visible')
  }

  // Summary add lesion
  addALesion() {
    //Clinical Condition
    this.noPreviousHistory();
    this.provisionalDiagnosis();
    this.excludeMelasma();
    this.excludeNmsc();
    this.selectBiopsyType();

    //Case Images
    this.addBodyMap();
    this.clickImage();
    this.selectBodyRegion();
    this.enterSpecimenLocation();
    this.saveBodyMap();

    //Upload Dermascopic Images
    this.assertTitle('Upload ');
    this.uploadImage();
    this.startUpload();
    this.isImageUploadedSuccessfully();
    this.assertFile('1.jpg')
    this.nextButtonUploadImg();
  }

}

