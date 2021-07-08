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

  clickPathologyRequestByFirstName(name){
      cy.get('.x-grid3-col')
        .contains(name)
        .parent()
        .nextUntil('td.x-grid3-col.x-grid3-td-4').next().contains('Draft').click();
  }

  clickReviewCaseByFirstName(name){
      cy.get('.x-grid3-col')
        .contains(name)
        .parent()
        .nextUntil('td.x-grid3-col.x-grid3-td-4').next().contains('Review Case').click();
  }

  assertGender(gender){
    cy.get('#case_Gender [selected]').contains(gender).should('be.visible')
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

  assertGender(option){
    cy.get('select[id="case_Gender"] [selected="selected"]')
      .should('be.visible')
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

  isStateVisible(state = 'NSW'){
      cy.get('#case_patientstate')
        .contains(state)
        .should('be.visible')
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

  assertMedicare(medicare){
    cy.get(`input[id="case_NHS"][value="${medicare}"]`)
      .should('be.visible')
  }

  selectBilling(option = 'DVA'){
    cy.get('select#case_patientfinancial')
      .select(option)
  }

  assertSelectedBilling(option = 'DVA'){
    cy.get(`select#case_patientfinancial [selected="selected"][value="${option}"]`)
    .should('be.visible')
  }

  checkPrivate(){
    cy.get('#shownhsprivate #case_patientinformedfinancial')
      .click()
  }

  isPrivateChecked(){
    cy.get('#shownhsprivate #case_patientinformedfinancial')
      .should('be.checked')
  }

  enterDVANumber(text){
    cy.get('input#case_dvano')
      .type(text)
  }

  assertDVANumber(text){
    cy.get(`input#case_dvano[value="${text}"]`)
      .should('be.visible')
  }

  saveDraft(isForce = false){
      cy.get('a[onclick]')
        .contains('Save draft » ').click({force:isForce});
  }

  dblclicksaveDraft(){
      cy.get('a[onclick]')
        .contains('Save draft » ')
        .dblclick()
        .wait(1000)
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

  clickEditBodyMap(){
    this.clickHrefByText('Edit body map and location', true)
  }

  noPreviousHistory(){
      cy.get('input[id="important_1"]')
        .click()
  }

  previousHistory(){
      cy.get('input[id="important_17"]')
        .click()
  }
  provisionalDiagnosis(text = 'IEC (IEC/SCCis/Bowens)'){
    cy.get('select[id *= "ProvisionalDiagnosis"]')
      .should('be.visible')
      .select(text)
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
    cy.get('img[id="showimaged"]').first()
      .click()
  }
  clickRIghtHand(){
      cy.get('div[style="top: 389px; left: 534px;"]')
        .click()
  }

  selectBodyRegion(text = 'Neck', isForce = true){
      cy.get('#body_layout_form select#BodyMapRegion')
      .eq(0)
      .select(text, {force: isForce})
  }

  enterClinicalNote(text="test notes"){
      cy.get('textarea[id="important_16"]')
        .clear()
        .type(text)
  }

  enterSpecimenLocation(text = 'automation text'){
      cy.get('textarea[id="specimenLocation"]')
        .clear()
        .type(text)
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

  dblclickSaveBodyMap(){
      cy.get('button[id="uploadbodylayoutupdate"]')
        .dblclick()
  }

  //Upload Dermascopic Images
  uploadImage(name = '1.jpg'){
      cy.get('input[type="file"]')
        .attachFile(name)
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

  isProgressBarDisappear(timeOut = 30000){
    cy.get('body').find('.fileupload-progress', { timeout: timeOut }).should('not.be.visible')
  }

  startUpload(isForce=true){
    cy.get('[id="btn-start-upload"][type="submit"]')
      .click({force:isForce})
  }

  isImageUploadedSuccessfully(timeOut = 30000){
    cy.get('td[class="preview"]', { timeout: timeOut })
      .should('be.visible')
  }

  nextButtonUploadImg(timeOut = 30000){
    cy.get('a[id="showlinkshownextv2"]', { timeout: timeOut })
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
    this.isReviewCase('Review Case')
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
    this.assertHeader('Upload ');
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
    this.assertHeader('Upload ');
    this.uploadMultiImages(number);
    this.startUpload();
    this.isProgressBarDisappear();
    this.isImageUploadedSuccessfully();
    this.nextButtonUploadImg();
  }

  addALesionLargeImages(number = 1) {
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
    for(let i = 1; i<=number; i++){
      this.assertHeader('Upload ');
      this.uploadImage('largeImage.jpg');
    }
    this.assertHeader('Upload ');
    cy.wait(500);
    this.assertText('Remove');
    cy.wait(500);
    this.startUpload();
    this.isProgressBarDisappear(90000);
    cy.wait(500);
    this.startUpload(true);
    cy.wait(30000);
    this.isImageUploadedSuccessfully(90000);
    this.nextButtonUploadImg(90000);
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
      this.clickPathologyRequestByFirstName(name);
      this.isLab(user.lab[index]);
    }
  }

  assertAllStateSaveAndDraft(name) {
    for(const index in user.state){
      this.selectState(user.state[index])
      this.clickButtonByText('Save');
      this.clickPathologyRequestByFirstName(name);
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

  assertAllValidMessage() {
   for(const message of user.validMessage){
     this.assertText(message);
   }
  }

  assertTitleTop(text) {
    cy.get('.txt-titile-top').contains(text).should('be.visible');
  }

  assertTitleTxt(text) {
    cy.get('.title-txt').contains(text).should('be.visible');
  }
  
  assertHeader(text) {
    cy.get('.txt-header').contains(text).should('be.visible');
  }

  isOrBetweenBiopsyTypeAndSurgicalManagement() {
    cy.get('select#BiopsyType').parent().contains('Or').should('be.visible');
  }

  assertUploadImagesDescription(text) {
    cy.get('.row.fileupload-buttonbar').contains(text).should('be.visible');
  }

  isTheOrderOnlyOne(name) {
    cy.get('.x-grid3-td-1')
    .find('.x-grid3-col-1')
    .contains(name)
    .should('have.length',1);
  }

  clickBackToUploadImage() {
    cy.get('#backtoupload')
    .should('be.visible')
    .click()
  }

  clickDeleteImage(number = 1) {
    cy.get('.delete>button')
    .eq(--number)
    .should('be.visible')
    .click()
  }

  isBackButtonOfUploadImage() {
    cy.get('#showlinkuploadback .docnavleft2')
    .should('be.visible')
  }

  isNextButtonOfUploadImage() {
    cy.get('#showlinkshownextv2.docnavright')
    .should('be.visible')
  }

  isPreviousHistologyChecked() {
    cy.get('label')
    .contains('Previous histology')
    .prev()
    .should('be.checked')
  }

  assertNoExcludemelanomaByLesion() {
    cy.get('[id^="ExcludeMelanoma"]')
    .eq(1)
    .should('be.disabled')
    .should('be.checked')
  }

  assertNoExcludeNMSCByLesion() {
    cy.get('[id^="ExcludeMelanoma"]')
    .eq(1)
    .should('be.disabled')
    .should('be.checked')
  }

  assertNoDermoscopyPerformedByLesion() {
    cy.get('[id^="DermoscopyPerformed"]')
    .eq(1)
    .should('be.disabled')
    .should('be.checked')
  }

  assertProvisionalDiagnosis(number = 1) {
    cy.get('[id^="ProvisionalDiagnosis"]')
    .eq(--number)
    .should('be.disabled')
  }

  assertAddress(maxLength = '100') {
    cy.get('#user_Address')
    .invoke('attr', 'maxlength')
    .should('eq', maxLength)
  }

  isStateDropdownVisible(){
    cy.get('select#user_State2')
    .should('be.visible')
  }

  selectStateAccount(state = 'TAS'){
    cy.get('select#user_State2')
    .select(state);
  }

  selectAndAssertEditedRegion(){
    this.clickEditBodyMap(true);
    this.assertHeader('Body map');

    cy.get('#body_layout_form select#BodyMapRegion option')
    .then(($options) => {
      // get the text of each option
      const regions =  Cypress._.map($options, ($option) => $option.innerText)
      for(let i=1; i<regions.length; i++){
        this.selectBodyRegion(regions[i], false)
        this.saveBodyMap();
        this.assertText('Body map is updating, please wait.')
        this.assertNoText('Body map is updating, please wait.')
        this.assertTitleTop('Confirm request details')
        cy.get('a[href]').contains('Edit body map and location').scrollIntoView();
        this.assertText(regions[i])
        if(i<regions.length - 1) {
          this.clickEditBodyMap(true);
          this.assertHeader('Body map');
        }
      }  
    })
     
  }

  selectAndAssertEditedProvisionalDiagnosis(firstname) {
    cy.get('select[id *= ProvisionalDiagnosis] option')
    .then(($options) => {
      // get the text of each option
      const pds =  Cypress._.map($options, ($option) => $option.innerText)
      for(let i=1; i<pds.length; i++){
        const tmpText = pds[i].trim();
        this.assertTitleTop('Confirm request details');
        this.assertText('Lesion 1');
        cy.get('.txt-header').contains('Clinical indication').scrollIntoView();
        this.assertText('Provisional diagnosis:')
        this.provisionalDiagnosis(tmpText, false)
        this.assertText(tmpText)
        this.clickHrefByText('Save update')
        this.assertTitleTop('Dashboard')
        this.assertFirstName(firstname)
        this.isReviewCase('Draft')
        this.clickPathologyRequestByFirstName(firstname);
        this.assertTitleTop('Confirm request details');
        this.assertText('Lesion 1');
        cy.get('.txt-header').contains('Clinical indication').scrollIntoView();
        this.assertText('Provisional diagnosis:')
        this.assertText(tmpText)
      }  
    })
     
  }
}

