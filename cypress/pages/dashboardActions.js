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

  assertValueVisible(value){
    cy.get(`body [value = '${value}']`)
    .should('be.visible')
  }
  clickPathologyRequestByFirstName(name, isForce = false){
    cy.wait(1000);
    cy.get('.x-grid3-col')
      .contains(name)
      .parent()
      .first()
      .nextUntil('td.x-grid3-col.x-grid3-td-4')
      .next()
      .contains('Draft')
      .first()
      .should('be.visible')
      .click({force:isForce});
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
  
  clickEditPatientDetails(isForce = false){
      cy.get('a#editpatientdetails')
        .click({force: isForce})
  }
  
  clickSavePatientDetails(isForce = false){
      cy.get('a#saveeditpatientdetails')
        .click({force: isForce})
  }
  
  clickOkPatientDetails(isForce = true){
      this.assertText('Please confirm the following details are correct:');
      cy.wait(1000);
      cy.get('.jquery-modal a[onclick*="sendupdatepatientdeatils"]')
        .click({force: isForce})
  }

  enterFirstName(firstname){
      cy.get('input[id="case_FirstName"]')
        .clear()
        .type(firstname)
  }

  assertLengthFirstName(number){
      cy.get('input[id="case_FirstName"]')
        .invoke('attr', 'size')
        .should('eq', number.toString())
  }

  enterLastName(lastname){
      cy.get('input[id="case_LastName"]')
        .clear()
        .type(lastname)
  }

  
  assertLengthLastName(number){
    cy.get('input[id="case_LastName"]')
      .invoke('attr', 'size')
      .should('eq', number.toString())
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
    cy.get('body').then(($body) => {
      if($body.find('a#editpatientdetails').length > 0) {
        this.clickEditPatientDetails();
        cy.get('select[id="case_Gender"]')
          .select(option);
        this.clickSavePatientDetails();
        this.clickOkPatientDetails();
      } else {
        cy.get('select[id="case_Gender"]')
        .select(option)
      }
    });
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

  assertLengthAddress(number){
    cy.get('input[id="case_Address"]')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  enterCity(city){
      cy.get('input[id="case_suburb"]')
        .type(city)
  }

  
  assertLengthsuburb(number){
    cy.get('input[id="case_suburb"]')
      .invoke('attr', 'size')
      .should('eq', number.toString())
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
      .clear()
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

  isPatientInformedFinancialUncheck() {
    cy.get('#shownhsprivate #case_patientinformedfinancial')
    .should('not.checked')
  }
  checkPrivate(isForce = false){
    cy.get('body').then(($body)=>{
      if($body.find('#shownhsprivate #case_patientinformedfinancial[checked="checked"]').length !== 1){
        cy.get('#shownhsprivate #case_patientinformedfinancial')
        .click({force: isForce})
      }
    })
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
  nextButton(isForce = false){
      cy.get('.docnav telederm .docnavright')
        .scrollIntoView()
        .click({force:isForce});
  }
  nextButtonNoScroll(isForce = false){
      cy.get('#showlinkshownext')
        .click({force:isForce});
  }
  backButton(isForce = false){
      cy.wait(1500);
      cy.get('a.clss-back')
        .contains('Back').first().click({ force: isForce});
  }
  backFromUpload(isForce = false){
      cy.wait(500);
      cy.get('[onclick="backupload()"]')
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

  assertLengthSpecimenLocation(number){
    cy.get('textarea[id="specimenLocation"]')
      .invoke('attr', 'maxlength')
      .should('eq', number.toString())
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
    .wait(2000)
    this.startUpload();  
  }

  
  uploadMultiImagesV2(name, number = 4){
    const imageArr = []
    for(let i = 1; i< number+1; i++){
     imageArr.push(name)
     cy.wait(200)
    }
    cy.get('input[type="file"]')
    .attachFile(imageArr)
    .wait(2000)
    this.startUpload();  
  }

  uploadMultiInvalidImages(number){
    const imageArr = []
    for(let i = 1; i< number+1; i++){
     imageArr.push(`${i}.png`)
    }
    cy.get('input[type="file"]')
    .attachFile(imageArr)
    .wait(500)
    this.startUpload();  
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

  isProgressBarDisappear(time = 90000){
    cy.get('body').find('.fileupload-progress', { timeout: time }).last().should('not.be.visible')
  }

  startUpload(isForce=true){
    cy.get('[id="btn-start-upload"][type="submit"]')
      .click({force:isForce})
  }

  isImageUploadedSuccessfully(time = 90000){
    cy.get('td[class="preview"]', { timeout: time })
      .should('be.visible')
  }

  nextButtonUploadImg(time = 60000, isForce = true){
    cy.get('a[id="showlinkshownextv2"]', { timeout: time })
      .scrollIntoView()
      .click({force: isForce})
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
  
  clickSubmitOnly(){
    this.assertText('Submit request & print »');
    cy
      .get('a.submit1')
      .contains('Submit request & print »').click()
  }

  clickCancelSubmit(){
    cy.get('[onclick="cloeasemodelreviews()"]').click();
  }

  clickContinueSubmit(){
    cy.get('[onclick="continuemodelreviews()"]').click();
  }

  submitCasePrint(){
    this.assertText('Submit request & print »');
    cy
      .get('a.submit1')
      .contains('Submit request & print »').click()
      .get('#ex1review2 [onclick="continuemodelreviews()"]').click();
  }
  returnToDashboard(isForce = true){
    cy.get('a[href*="/cases/dashboard"]')
      .scrollIntoView()
      .click({force:isForce})
  }
  waitForReviewCase(round = 1) {
    for(let i =0; i<round; i++){
      cy.get(".x-grid3-td-4[tabindex='0']").first().then(($col) => {
        if($col.find('[href *="/cases/tdgp_viewdetails_submit/"]').length < 1) {
          cy.wait(10000);
          cy.reload();
        }
      })
    }
  }
  isUploadSuccesfully(index, timeOut = 20000){
    cy.wait(timeOut);
    cy.reload();
    // this.isReviewCase('Review Case')
    this.waitForReviewCase(10)
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
    cy.wait(500);
    this.assertText('Remove');
    this.startUpload();
    this.isImageUploadedSuccessfully();
    this.assertFile('1.jpg')
    this.nextButtonUploadImg(30000, true);
  }

  addALesionNoImage() {
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
    this.clickHrefByText('Continue with no images');
  }

  addALesionNoImageSelectBodyMap(text = 'Neck') {
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
    this.clickHrefByText('Continue with no images');
  }

  addMuiltiPathologyRequestNoImagesBySelectRegion() {
    this.selectClinicOptionByName();
    this.clickOkSelectClinic();
    const regions = user.regionsBodyMap;
    for(let i=20; i<regions.length; i++){
      let name = regions[i];
      if(regions[i].indexOf('(') > 0){
        const temp = regions[i].split('(');
        name= temp[0].trim();
      }
      const firstname = `Submit-${this.randomAlpha(5)}`;
      const lastname = `${name}`;
      this.clickAddNewLesion();
      this.selectTitle('Mrs');
      this.enterFirstName(firstname);
      this.enterLastName(lastname);
      this.selectGender('Unknown');
      this.enterDOB(user.DOB);
      this.enterHomeAdd(user.address);
      this.enterCity(user.city);
      this.selectState();
      this.enterPostcode(user.postcode);
      this.enterContact(user.contact);
      this.enterMedicare(user.medicare);
      this.nextButton();

      this.noPreviousHistory();
      this.provisionalDiagnosis();
      this.excludeMelasma();
      this.excludeNmsc();
      this.selectBiopsyType();

      //Case Images
      this.addBodyMap();
      this.clickImage();
      this.selectBodyRegion();
      this.enterSpecimenLocation(name)
      this.assertHeader('Body map');    
   
      this.selectBodyRegion(regions[i], false)
      this.saveBodyMap();
      //Upload Dermascopic Images
      this.assertHeader('Upload ');
      this.clickHrefByText('Continue with no images');
        //Case Summary
      this.caseSummary();
      this.submitCasePrint();
      this.returnToDashboard();
    } 
  }

  addALesionByInvalidImages(number = 2, invalidImageNumber = 4) {
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
    if(number === 0){
      this.assertHeader('Upload');
      cy.wait(500);
      this.uploadMultiInvalidImages(invalidImageNumber);
      this.assertText('Remove');
      this.clickHrefByText('Continue with no images');
    } else if(number !== 4){
      this.assertHeader('Upload ');
      this.uploadMultiImages(number);
      cy.wait(500);
      this.assertText('Remove');
      this.startUpload();
      this.isProgressBarDisappear();
      this.isImageUploadedSuccessfully();
      this.uploadMultiInvalidImages(invalidImageNumber);
      cy.wait(500);
      this.assertText('Remove');
      this.nextButtonUploadImg(30000, true);
     } else {
        this.assertHeader('Upload ');
        this.uploadMultiImages(number-1);
        cy.wait(500);
        this.assertText('Remove');
        this.startUpload();
        this.isProgressBarDisappear();
        this.isImageUploadedSuccessfully();
        this.uploadMultiInvalidImages(invalidImageNumber);
        cy.wait(500);
        // upload 1 image
        this.assertText('Remove');
        this.assertHeader('Upload ');
        this.uploadMultiImages(1);
        cy.wait(500);
        this.assertText('Remove');
        this.startUpload();
        this.isProgressBarDisappear();
        this.isImageUploadedSuccessfully();
        this.nextButtonUploadImg(30000, true);
      }
  }

  addALesionByNumberImages(number = 4) {
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
    cy.wait(500);
    this.assertText('Remove');
    this.startUpload();
    this.isProgressBarDisappear();
    this.isImageUploadedSuccessfully();
    this.nextButtonUploadImg(30000, true);
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
      this.uploadImage('4 MB.jpg');
      this.assertHeader('Upload ');
      this.assertText('Remove');
      cy.wait(500);
      this.startUpload();
      this.isProgressBarDisappear(90000);
      this.isImageUploadedSuccessfully(90000);
    }
    this.nextButtonUploadImg(90000, true);
  }

  addALesionCombineImages() {
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
    this.uploadImage('15.jpg');
    this.assertHeader('Upload ');
    this.assertText('Remove');
    cy.wait(500);
    this.startUpload();

    this.assertHeader('Upload ');
    this.uploadImage('1.jpg');
    this.assertHeader('Upload ');
    this.assertText('Remove');
    cy.wait(500);
    this.startUpload();

    this.assertHeader('Upload ');
    this.uploadImage('2.jpg');
    this.assertHeader('Upload ');
    this.assertText('Remove');
    cy.wait(500);
    this.startUpload();

    this.assertHeader('Upload ');
    this.uploadImage('3.jpg');
    this.assertHeader('Upload ');
    this.assertText('Remove');
    cy.wait(500);
    this.startUpload();

    this.isProgressBarDisappear(90000);
    this.isImageUploadedSuccessfully(90000);
    this.nextButtonUploadImg(90000, true);
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
    .eq(1)
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
      this.clickEditPatientDetails();
      this.selectState(user.state[index]);
      this.clickSavePatientDetails();
      this.clickOkPatientDetails();
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

  clickBackToBody() {
    cy.get('telederm#showlinkuploadback')
    .should('be.visible')
    .click()
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

  clickBackButtonOfUploadImageInLessionDetails() {
    cy.get('div#menu_bottom_lession a#backtoupload')
    .click()
  }

  isBackButtonOfUploadImageInLessionDetails() {
    cy.get('div#menu_bottom_lession')
    .should('be.visible')
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
      cy.log(regions.toLocaleString())
      for(let i=1; i<regions.length; i++){
        const randomID = Math.floor(Math.random() * (regions.length - 1)) + 1
        if(regions[randomID].indexOf('(') > 0){
          const temp = regions[randomID].split('(');
          regions[randomID] = temp[0].trim();
        }
        this.selectBodyRegion(regions[randomID], false)
        this.saveBodyMap();
        this.assertText('Body map is updating, please wait.')
        this.assertNoText('Body map is updating, please wait.')
        this.assertTitleTop('Confirm request details')
        cy.get('a[href]').contains('Edit body map and location').scrollIntoView();
        this.assertText(regions[randomID])
        if(i<regions.length - 1) {
          this.clickEditBodyMap(true);
          this.assertHeader('Body map');
        }
        break;
      }  
    })
     
  }

  selectAndAssertEditedProvisionalDiagnosis(firstname) {
    cy.get('select[id *= ProvisionalDiagnosis] option')
    .then(($options) => {
      // get the text of each option
      const pds =  Cypress._.map($options, ($option) => $option.innerText)
      const randomID = Math.floor(Math.random() * (pds.length - 1)) + 1
     
      const tmpText = pds[randomID].trim();
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
      this.assertText('Provisional diagnosis:');
      this.assertText(tmpText);
    });      
  }

  selectClinicOptionByName(name, isTrue = false) {
    if(typeof(name)!= 'string' || name === null)
    {
      cy.get('.jquery-modal #id_set_default > option')
        .eq(1)
        .then(element => cy.get('#id_set_default').select(element.val(), {force: isTrue}))
    } else {
      cy.get("#id_set_default")
      .select(name, {force: isTrue});
    }
  }

  clickOkSelectClinic(isForce = false, timeOut = 1000) {
    cy.wait(timeOut);
    cy.get('body').then(($body) => {
      if($body.find('[onclick="setdefaultclinic()"]').length > 0){
        cy.get('[onclick="setdefaultclinic()"]')
        .click({force: isForce});
      }else {
        cy.log('Clinic modal does not appears');
      }
    }); 
  }

  selectTitleCopy1ByIndex(index = 1, isTrue) {
      const titleLocator = '#case_doctor1title'
      cy.get(`${titleLocator} > option`)
        .eq(index)
        .then(element => cy.get(`${titleLocator}`).select(element.val(), {force: isTrue}))
  }

  selectTitleCopy2ByIndex(index = 1, isTrue) {
      const titleLocator = '#case_doctor2title'
      cy.get(`${titleLocator} > option`)
        .eq(index)
        .then(element => cy.get(`${titleLocator}`).select(element.val(), {force: isTrue}))
  }

  selectTitleCopy3ByIndex(index = 1, isTrue) {
      const titleLocator = '#case_doctor3title'
      cy.get(`${titleLocator} > option`)
        .eq(index)
        .then(element => cy.get(`${titleLocator}`).select(element.val(), {force: isTrue}))
  }

  selectTitleCopy4ByIndex(index = 1, isTrue) {
      const titleLocator = '#case_doctor4title'
      cy.get(`${titleLocator} > option`)
        .eq(index)
        .then(element => cy.get(`${titleLocator}`).select(element.val(), {force: isTrue}))
  }

  assertLengthFirstNameCopy1(number){
    cy.get('#case_doctor1firstname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  assertLengthLastNameCopy1(number){
    cy.get('#case_doctor1fullname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  assertLengthFirstNameCopy2(number){
    cy.get('#case_doctor2firstname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  
  assertLengthLastNameCopy2(number){
    cy.get('#case_doctor2fullname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  assertLengthFirstNameCopy3(number){
    cy.get('#case_doctor3firstname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }
  
  assertLengthLastNameCopy3(number){
    cy.get('#case_doctor3fullname')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  enterFirstNameCopy1(text){
    cy.get('#case_doctor1firstname')
    .clear()
    .type(text)
  }

  assertFirstNameCopy1(text){
    cy.get('#case_doctor1firstname')
    .invoke('attr','value')
    .should('have.text',text)
  }

  enterFirstNameCopy2(text){
    cy.get('#case_doctor2firstname')
    .clear()
    .type(text)
  }

  enterFirstNameCopy3(text){
    cy.get('#case_doctor3firstname')
    .clear()
    .type(text)
  }

  enterFirstNameCopy4(text){
    cy.get('#case_doctor4firstname')
    .clear()
    .type(text)
  }

  enterLastNameCopy1(text){
    cy.get('#case_doctor1fullname')
    .clear()
    .type(text)
  }

  enterLastNameCopy2(text){
    cy.get('#case_doctor2fullname')
    .clear()
    .type(text)
  }

  enterLastNameCopy3(text){
    cy.get('#case_doctor3fullname')
    .clear()
    .type(text)
  }

  enterLastNameCopy4(text){
    cy.get('#case_doctor4fullname')
    .clear()
    .type(text)
  }

  assertLengthSuburbCopy1(number){
    cy.get('#case_doctor1suburb')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  assertLengthSuburbCopy2(number){
    cy.get('#case_doctor2suburb')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  assertLengthSuburbCopy3(number){
    cy.get('#case_doctor3suburb')
      .invoke('attr', 'size')
      .should('eq', number.toString())
  }

  enterSuburbCopy1(text){
    cy.get('#case_doctor1suburb')
    .clear()
    .type(text)
  }

  enterSuburbCopy2(text){
    cy.get('#case_doctor2suburb')
    .clear()
    .type(text)
  }

  enterSuburbCopy3(text){
    cy.get('#case_doctor3suburb')
    .clear()
    .type(text)
  }

  enterSuburbCopy4(text){
    cy.get('#case_doctor4suburb')
    .clear()
    .type(text)
  }

  clickOnTheDoNotSendCheckBox(){
    cy.get(user.patientDetailsElement.doNotSendCheckbox)
    .should('be.visible')
    .click()
  }

  isDoNotSendChecked(){
    cy.get(user.patientDetailsElement.doNotSendCheckbox)
    .should('be.checked')
  }

  checkOrderIsAddedToClinicDefault(orderName){
    cy.get('#clinic_search option[selected]').invoke('text').then((clinicName) => {
      this.assertText('Accession No.');
      this.assertText(orderName);
      this.clickPathologyRequestByFirstName(orderName, true);
      this.assertText(clinicName);
    })
  }
  isEditPatientDetailsVisible(){
    cy.get('a#editpatientdetails')
    .should('be.visible')
  }
  checkAllPatientDetailsISDisabled(elementObj = user.patientDetailsElement){
    const elements = Object.values(elementObj)
    for(const item of elements){
      cy.get(item).should('be.disabled');
    }
  }

  deleteLesionByName(lesion1, times = 1){
    for(let index = 0; index<times; index+=1)
    {
      this.assertButton('Dashboard')
      this.scrollToLesion(lesion1)
      this.assertText(lesion1)
      this.clickDeleteLesion(lesion1)
    }
  }

 isPatientClinic(clinicName){
   cy.get('#clinicnname option[selected]')
   .invoke('text')
   .should('be.equal', clinicName);
 }

 isDefaultClinic(clinicName){
   cy.get('#setdefaultclinic > b')
   .invoke('text')
   .should('be.equal', clinicName);
 }

 logOut() {
  cy.get('.logout[href="/logout"]')
    .click();
 }
 selectAndCheckDefaultClinic(option = 1, isForce = false)
  {
    cy.get('#id_set_default > option')
      .eq(option)
      .invoke('text').then((text) => {
        cy.get('#id_set_default')
        .select(text, {force: isForce});
        this.clickOkSelectClinic();
        cy.wait(1000);
        this.isDefaultClinic(text);
      })
  }
 selectAndCheckPatientClinic(option = 1, isForce = false)
  {
    cy.get('#clinicnname > option')
      .eq(option)
      .invoke('text').then((text) => {
        cy.get('#clinicnname')
        .select(text, {force: isForce});
        this.nextButton();
        this.backButton();
        cy.wait(1000);
        this.isPatientClinic(text);
      })
  }
  
 editToScheduleFee()
  {
    this.clickEditPatientDetails();
    // scheduleFee
    this.selectBilling(user.billing.scheduleFee);
    this.isPatientInformedFinancialUncheck();
    this.enterMedicare(user.medicare);
    this.checkPrivate();
    this.clickSavePatientDetails();
    this.clickOkPatientDetails();
  }

 fillScheduleFeeInPatientDetails()
  {
    this.selectBilling(user.billing.scheduleFee);
    this.enterMedicare(user.medicare);
    this.checkPrivate();
  }

  addMultiSubmit() 
  {
    this.selectClinicOptionByName();
    this.clickOkSelectClinic();
    for(let i=0; i<50; i++){
      const subname = this.randomAlpha(10)
      const firstname = `API-${subname}`;
      cy.saveDraft(user.username, user.password, firstname);
      cy.reload()
      this.clickOkSelectClinic();
      this.assertText(subname);
      this.assertText('Create New Pathology Request');
      this.clickPathologyRequestByFirstName(subname);

      // Copies report

      this.enterFirstNameCopy3('Hospital')
      this.enterLastNameCopy3('Ward ')
      this.enterSuburbCopy3('suburb C')

      this.clickHrefByText('Save update');

      this.clickPathologyRequestByFirstName(subname);
      
      this.assertValueVisible('Hospital')
      this.assertValueVisible('Ward ')
      this.assertValueVisible('suburb C')

      this.addAnotherLesion();
      this.addALesionByInvalidImages(1, 4);

      //Case Summary
      this.caseSummary();
      this.submitCasePrint();
      this.returnToDashboard();
    } 
  }
  addMultiSubmitByImageName(imageName, times) 
  {
    this.selectClinicOptionByName();
    this.clickOkSelectClinic();
    for(let i=0; i<times; i++){
      const subname = this.randomAlpha(10)
      const firstname = `API-${subname}`;
      cy.saveDraft(user.username, user.password, firstname);
      cy.reload()
      this.clickOkSelectClinic();
      this.assertText(subname);
      this.assertText('Create New Pathology Request');
      this.clickPathologyRequestByFirstName(subname);

      // Copies report

      this.enterFirstNameCopy3('Hospital')
      this.enterLastNameCopy3('Ward ')
      this.enterSuburbCopy3('suburb C')

      this.clickHrefByText('Save update');

      this.clickPathologyRequestByFirstName(subname);
      
      this.assertValueVisible('Hospital')
      this.assertValueVisible('Ward ')
      this.assertValueVisible('suburb C')

      this.addAnotherLesion();
      this.addALesionByInvalidImages(1, 4);

      this.addAnotherLesion();
      this.addALesionByInvalidImages(1, 4);

      this.addAnotherLesion();
      this.addALesionByInvalidImages(1, 4);

      this.addAnotherLesion();
      this.addALesionByInvalidImages(1, 4);

      //Case Summary
      this.caseSummary();
      this.submitCasePrint();
      this.returnToDashboard();
    } 
  }
  
  editBodyMap(specText = 'edited', optionIndex = Math.floor(Math.random() * user.regionsBodyMap.length)) {
      //Edit body map
      this.clickEditBodyMap()
      this.selectBodyRegion(user.regionsBodyMap[optionIndex]);
      this.enterSpecimenLocation(specText);
      this.saveBodyMap();
      this.assertElement('#bdm_uploading');
      this.assertElementNotExist('img#bdm_uploading');
      this.assertText('Edit body map and location')
  }

  waitForDeleteButtonVisible(number, round){
    for(let i = 1; i<= round; i++){
      cy.get('body').then(($body) => {
        if($body.find('button[data-type="DELETE"]').length < number) {
          cy.wait(2000);
          if(i=== round/2){
            this.startUpload();
          }
        }
      })
    }
  }

  addLargeImagesByName(imageName = '5mb.jpg', number=3) {
    //Upload Dermascopic Images
    // for(let i = 1; i<=number; i++){
      this.assertHeader('Upload ');
      this.uploadMultiImagesV2(imageName);
      this.assertHeader('Upload ');
      this.assertText('Remove');
      cy.wait(2000);
    // }
    this.startUpload();
    this.waitForDeleteButtonVisible(number, 30);
    cy.wait(2000);
    this.startUpload();
    cy.wait(2000);
    this.isProgressBarDisappear(90000);
    this.isImageUploadedSuccessfully(90000);
    this.nextButtonUploadImg(90000, true);
  }
  
  addMuiltiPathologyRequestLargeImagesBySelectRegion(imageName,numberLesion, roundTest = user.regionsBodyMap.length) {
    const regions = user.regionsBodyMap;
    for(let i=1; i<= roundTest; i++){
      let name = regions[i];
      if(regions[i].indexOf('(') > 0){
        const temp = regions[i].split('(');
        name= temp[0].trim();
      }
      const firstname = `Submit-${this.randomAlpha(5)}`;
      const lastname = `${name}`;
      this.clickAddNewLesion();
      this.selectTitle('Mrs');
      this.enterFirstName(firstname);
      this.enterLastName(lastname);
      this.selectGender('Unknown');
      this.enterDOB(user.DOB);
      this.enterHomeAdd(user.address);
      this.enterCity(user.city);
      this.selectState();
      this.enterPostcode(user.postcode);
      this.enterContact(user.contact);
      this.enterMedicare(user.medicare);
      this.nextButton();

      for(let index =1; index<= numberLesion; index ++){
        this.noPreviousHistory();
        this.provisionalDiagnosis();
        this.excludeMelasma();
        this.excludeNmsc();
        this.selectBiopsyType();

        //Case Images
        this.addBodyMap();
        this.clickImage();
        this.selectBodyRegion();
        this.enterSpecimenLocation(name)
        this.assertHeader('Body map');    
    
        this.selectBodyRegion(regions[i], false)
        this.saveBodyMap();
        //Upload Dermascopic Images
        this.addLargeImagesByName(imageName, numberLesion)
        if(index < numberLesion){
          this.addAnotherLesion();
        }
      }
      this.caseSummary();
      this.submitCasePrint();
      this.returnToDashboard();
      cy.wait(2000);
    } 
    this.isUploadSuccesfully(0, 15000);
  }
  
  addMuiltiPathologyRequestLargeImagesBySelectRegionV2(imageName,numberLesion, roundTest = user.regionsBodyMap.length, startRegion = 1) {
    const regions = user.regionsBodyMap;
    for(let i=1; i<= roundTest; i++){
      let regionNum = startRegion + (i-1)
      let name = regions[regionNum];
      if(regions[regionNum].indexOf('(') > 0){
        const temp = regions[regionNum].split('(');
        name= temp[0].trim();
      }
      const firstname = `Submit-${this.randomAlpha(5)}`;
      const lastname = `${name}`;
      this.clickAddNewLesion();
      this.selectTitle('Mrs');
      this.enterFirstName(firstname);
      this.enterLastName(lastname);
      this.selectGender('Unknown');
      this.enterDOB(user.DOB);
      this.enterHomeAdd(user.address);
      this.enterCity(user.city);
      this.selectState();
      this.enterPostcode(user.postcode);
      this.enterContact(user.contact);
      this.enterMedicare(user.medicare);
      this.nextButton();

      for(let index =1; index<= numberLesion; index ++){
        this.noPreviousHistory();
        this.provisionalDiagnosis();
        this.excludeMelasma();
        this.excludeNmsc();
        this.selectBiopsyType();

        //Case Images
        this.addBodyMap();
        this.clickImage();
        this.selectBodyRegion();
        this.enterSpecimenLocation(name)
        this.assertHeader('Body map');    
    
        this.selectBodyRegion(regions[regionNum], false)
        this.saveBodyMap();
        //Upload Dermascopic Images
        this.addLargeImagesByName(imageName, 3)
        if(index < numberLesion){
          this.addAnotherLesion();
        }
      }
      this.caseSummary();
      this.submitCasePrint();
      this.returnToDashboard();
      cy.wait(2000);
    } 
    this.isUploadSuccesfully(0, 20000);
  }

  clickSaveUpdateForBeta() {
    this.clickHrefByText('Save update');
    cy.wait(1000);
  }
}



