import { CommonActions } from "./commonAction";
import user from "../support/constants";

export class DashboardActions extends CommonActions
{
  clickSetup(){
      this.clickHrefByText('Setup')
  }
  clickEditAccount(){
      cy.get('a[href="/users/edit/17"]').click()
  }
  clickSaveUpdateAccount(){
      cy.get('[onclick][type = "submit"][value="Save Update"]').click()
  }

  clickAddNewLesion(){
      cy.get('a[href="/cases?urgent=1"]')
        .contains('Create New Pathology Request').click()
  }

  clickDeleteLesion(text = 'Lesion 1'){
      cy.get('div[id] h3').contains(text).next().contains('Delete').click();
      cy.wait(1000);
  }

  clickPathologyRequestByFristName(name){
      cy.get('.x-grid3-col')
        .contains(name)
        .parent()
        .nextUntil('td.x-grid3-col.x-grid3-td-4').next().contains('Draft').click();
  }

  selectTitle(option){
      cy.get('select[id="temptitle"]')
        .select(option)
  }
  
  enterSubHurbAccount(text){
      cy.get('input[id="user_Suburb"]')
        .clear()
        .type(text)
  }
  
  enterFirstName(firstname){
      cy.get('input[id="case_FirstName"]')
        .type(firstname)
  }

  enterLastName(lastname){
      cy.get('input[id="case_LastName"]')
        .clear()
        .type(lastname)
  }

  clickGender(){
    cy.get('select[id="case_Gender"]')
      .parent()
      .click()
  }

  isGender(text){
    cy.get('select[id="case_Gender"]')
      .contains(text).should('be.visible')
  }

  isNotGender(text){
    cy.get('select[id="case_Gender"]')
      .should('not.contain.text', text)
  }

  selectGender(option){
    cy.get('select[id="case_Gender"]')
      .select(option)
  }

  selectLab(option){
    cy.get('select[id="labcode"]')
      .select(option)
  }

  isLab(option){
    cy.get('select[id="labcode"] [selected="selected"]')
      .contains(option)
      .should('be.visible')
  }

  isState(option){
    cy.get('select[id="case_patientstate"] [selected="selected"]')
      .contains(option)
      .should('be.visible')
  }

  isTitle(option){
    cy.get('select[id="temptitle"] [selected="selected"]')
      .contains(option)
      .should('be.visible')
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

  selectState(state = 'NSW'){
      cy.get('select[id="case_patientstate"]')
        .select(state)
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
  backButton(isForce = false){
      cy.wait(500);
      cy.get('a.clss-back')
        .contains('Back').first().click({ force: isForce});
  }

  assertTextArea(text){
    cy.get('textarea')
    .contains(text)
    .should('be.visible')
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

  enterClinicalNote(text="test notes"){
      cy.get('textarea[id="important_16"]')
        .clear()
        .type(text)
  }

  enterSpecimenLocation(){
      cy.get('textarea[id="specimenLocation"]')
        .type('Test Location')
  }

  enterOtherTitle(text){
      cy.get('#showtitle input')
        .clear()
        .type(text)
  }

  assertMaxLengthOtherTitle(number){
      cy.get('#showtitle input')
        .invoke('attr', 'maxlength')
        .should('eq', number)
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

  uploadMultiImages(number){
    const imageArr = []
    for(let i = 1; i< number+1; i++){
     imageArr.push(`${i}.jpg`)
    }
    cy.get('input[type="file"]')
    .attachFile(imageArr)
    .wait(500)  
  }
  

  uploadAdditionalImages(number=1){
    cy.url(url => {
      // Get window object
      cy.window().then((win) => {
        cy.stub(win, 'open', newUrl => {
           // change window location to be same as the popup url
          win.location.href = Cypress.config().baseUrl + newUrl;
        }).as('windowOpen') 
      });

      this.clickHrefByText('Add additional images')

      cy.get('@windowOpen').should('be.called')
      cy.window().then((win) => {
        cy.stub(win, 'open', newUrl => {
          win.location.href = Cypress.config().baseUrl + newUrl;
        }).as('windowOpen') 
      });
      cy.wait(2000);
      this.uploadMultiImages(number);
      this.startUpload();
      cy.wait(2000);
      cy.visit(url);
    });
  }

  isProgressBarDisappear(){
    cy.get('body').find('.fileupload-progress').should('not.be.visible')
  }

  startUpload(){
    cy.get('[id="btn-start-upload"][type="submit"]')
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
 
  //Case Summary
  addAnotherLesion(){
    cy.get('a[href]')
      .contains('Add another lesion').first().click()
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
    cy.get('a[href*="/cases/dashboard"]')
      .click()
  }
  isUploadSuccesfully(index){
    cy.wait(10000);
    cy.reload();
    cy.reload();
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

  addALesionMoreThan4Images(number = 4) {
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
    this.uploadMultiImages(number);
    this.startUpload();
    this.isProgressBarDisappear();
    this.isImageUploadedSuccessfully();
    this.nextButtonUploadImg();
  }

  assertAllLabNextAndBack() {
    for(const index in user.lab){
      this.selectLab(user.lab[index])
      this.nextButton();
      this.noPreviousHistory();
      this.backButton();
      this.isLab(user.lab[index]);
    }
  }

  isPatientDetails(txt = 'Patient details') {
    cy.get('.bgbox-left .txt-header')
    .last()
    .contains(txt)
    .should('be.visible')
  }

  assertAllLabSaveAndDraft(name) {
    for(const index in user.lab){
      this.selectLab(user.lab[index])
      this.clickButtonByText('Save');
      this.clickPathologyRequestByFristName(name);
      this.isLab(user.lab[index]);
    }
  }

  assertAllStateSaveAndDraft(name) {
    for(const index in user.state){
      this.selectState(user.state[index])
      this.clickButtonByText('Save');
      this.clickPathologyRequestByFristName(name);
      this.isState(user.state[index]);
    }
  }

  compareDOB(DOB) {
   cy.get('input[id="case_DOB"]')
   .invoke('attr','value')
   .should('eq',DOB)
  }

  assertNoPreviousHistologyChecked() {
   cy.get('[id="important_1"][checked="checked"]')
   .should('be.visible')
  }

  scrollToLesion(text) {
   cy.get('h3>span').contains(text).scrollIntoView();
  }
}

