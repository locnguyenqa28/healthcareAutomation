import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import { ClinicActions } from "../pages/clinicActions";
import user from "../support/constants"


describe("Verify bug on EDERMPATH JIRA", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const clinicActions = new ClinicActions();
    const validOtherText = "abdzABCZ--.";
  
  it("EDERMPATH-62. The delete button is not presented after adding a new lesion", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH six two-${homeActions.randomAlpha(10)}`;
    const lastname = `The delete button is not presented after adding a new lesion`;
 
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.assertText('Delete')
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
  
  it("EDERMPATH-64. Back button is not functional after backing from the Body Map", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH six four-${homeActions.randomAlpha(10)}`;
    const lastname = `Back button is not functional after backing from the Body Map`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.assertHeader('Body map');
    dashboardActions.backButton();
    dashboardActions.assertHeader('Clinical indication')
    dashboardActions.backButton();
    dashboardActions.isPatientDetails('Patient details')
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });

  it("EDERMPATH-71. Previous history field selection is inconsistent", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
     //Add New Lesion - Patient Details
     const firstname = `EDERMPATH seven one ${homeActions.randomAlpha(5)}`;
     const lastname = `Previous history`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    //Clinical Condition
    dashboardActions.previousHistory();
    // dashboardActions.provisionalDiagnosis();
    // dashboardActions.excludeMelasma();
    // dashboardActions.excludeNmsc();
    // dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(1);
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.nextButtonUploadImg();
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertNoExcludemelanomaByLesion()
    dashboardActions.assertNoExcludeNMSCByLesion()
    dashboardActions.assertNoDermoscopyPerformedByLesion()
    // dashboardActions.assertProvisionalDiagnosis()
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  }); 
  
  it("EDERMPATH-75. The state is always back to ACT after adding a new conditions", () => 
  {
    const firstname = `EDERMPATH seven five ${homeActions.randomAlpha(10)}`;
    const lastname = `The state is always back to ACT`;
    const state = user.state[Math.floor(Math.random() * 7)]
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState(state);
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.isStateVisible(state);
    dashboardActions.saveDraft();
    dashboardActions.assertTitleTop(user.titleTop.dashboard)
    dashboardActions.isReviewCase('Draft')
  });

  it("EDERMPATH-78. The state is not saved", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH seven eight ${homeActions.randomAlpha(10)}`;
    const lastname = `The state is not saved`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.selectState(user.state[0]);
    dashboardActions.clickButtonByText('Save');

    loginActions.visitPageAndLogin(user.username, user.password);
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.isState(user.state[0]);

    dashboardActions.assertAllStateSaveAndDraft(firstname); 
  });

  it("EDERMPATH-79. Unable to add new conditions from the draft", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH seven nine ${homeActions.randomAlpha(10)}`;
    const lastname = `Unable to add new conditions from the draft`;
   
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.saveDraft();
    
    loginActions.visitPageAndLogin(user.username, user.password);
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.assertFirstName(firstname)

    dashboardActions.isReviewCase('Draft')
    dashboardActions.clickPathologyRequestByFirstName(firstname);
    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard');
    dashboardActions.saveDraft();

    loginActions.visitPageAndLogin(user.username, user.password);
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.assertFirstName(firstname)

    homeActions.isDashboardDisplayed();
    dashboardActions.isReviewCase('Draft')
  });
    
  it("EDERMPATH-80. Unable to save the new lesion although the last name changing to a valid value", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH eight zero ${homeActions.randomAlpha(10)}`;
    const invalidLastname = `Invalid lastname 123`;
    const lastname = "a-zA-Z'`";
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(invalidLastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.saveDraft();
    dashboardActions.assertText("Please enter a last name. Allowed characters: a-z,A-Z,-,',`.");
    dashboardActions.enterLastName(lastname);
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
  
  it("EDERMPATH-81. The 5th condition will be generated after editing twice", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH eight one ${homeActions.randomAlpha(10)}`;
    const lastname = `The five condition will be generated after editing twice`;
   
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Edit body map
    dashboardActions.clickHrefByText('Edit body map and location');
    dashboardActions.selectBodyRegion('Arm');
    dashboardActions.enterSpecimenLocation(homeActions.randomAlpha(40));
    dashboardActions.saveBodyMap();
    dashboardActions.assertNoText('Save body map');

    //Edit body map
    dashboardActions.assertNoText('Save body map');
    dashboardActions.clickHrefByText('Edit body map and location');
    dashboardActions.selectBodyRegion('Arm');
    dashboardActions.enterSpecimenLocation(homeActions.randomAlpha(40));
    dashboardActions.saveBodyMap();
    dashboardActions.assertNoText('Save body map');


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Lesion 2')
    dashboardActions.assertText('Lesion 3')
    dashboardActions.assertText('Lesion 4')
    dashboardActions.assertNoText('Lesion 5')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-83. After adding two conditions the DOB is missing", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH eight three`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.compareDOB(user.DOB)
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
  //4 lesions
  it("EDERMPATH-85. Able to add more than 4 conditions by multi clicking on Save body map", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH eight five ${homeActions.randomAlpha(10)}`;
    const lastname = `Able to add more than four conditions`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.dblclickSaveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(1);
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.nextButtonUploadImg();


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Lesion 2')
    dashboardActions.assertText('Lesion 3')
    dashboardActions.assertText('Lesion 4')
    dashboardActions.assertNoText('Lesion 5')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-87. The Save body map button is not functional", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
  
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH eight seven ${homeActions.randomAlpha(10)}`;
    const lastname = `The Save body map button is not functional`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    //Clinical Condition
    dashboardActions.previousHistory();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();
    dashboardActions.assertAlert('Please select an area on the body map.');
    dashboardActions.okDialog();

    dashboardActions.clickImage();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(1);
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.nextButtonUploadImg();
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-102. The Title is rollbacked to blank after selecting Other", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname =`EDERMPATH one one two ${homeActions.randomAlpha(10)}`;
    const lastname = `EDERMPATH one one two`;
    const title = 'Other';
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle(title);
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.saveDraft();
    dashboardActions.clickPathologyRequestByFirstName(firstname)
    dashboardActions.isTitle(title)
  });
        
  it("EDERMPATH-103. UI - Clinical indication page changes", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one zero three ${homeActions.randomAlpha(10)}`;
    const lastname = `Clinical indication page check`;
    const validOtherText = "abdzABCZ--.";
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.assertTitleTop('Add patient details')
    dashboardActions.assertTitleTxt('Lesion: 1')
    dashboardActions.assertHeader('Lesion images')
    dashboardActions.isOrBetweenBiopsyTypeAndSurgicalManagement()
    dashboardActions.previousHistory();
    dashboardActions.backButton();

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
        
  it("EDERMPATH-114. All fields are blank after editing the body map", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one one four`;
    const quoteText = 'automation';
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.enterClinicalNote(quoteText);
    dashboardActions.selectBiopsyType();

    //Case AddBodyMap
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();
    dashboardActions.assertHeader('Upload');
    dashboardActions.assertHeader('Lesion');
    dashboardActions.assertHeader('Images');
    dashboardActions.backButton(true);
    dashboardActions.assertHeader('Clinical indication');
    dashboardActions.backButton(true);
    dashboardActions.isPatientDetails();
    dashboardActions.nextButton(true);
    dashboardActions.assertText(quoteText);
    dashboardActions.assertText('BCC (Basal Cell Carcinoma)');
    dashboardActions.assertNoPreviousHistologyChecked()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Submit
    dashboardActions.saveDraft();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });

  it("EDERMPATH-115. Case fails to upload if Lesion 3 is deleted before submition", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one one five ${homeActions.randomAlpha(20)}`;
    const lastname = `delete third lesion`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion('Lesion 3')
    dashboardActions.assertText('Lesion 3')
    dashboardActions.clickDeleteLesion('Lesion 3')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("EDERMPATH-137. The Clinical note is not be saved after inputting the quote symbol", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one three seven`;
    const invalidQuoteText = '"""""""""""""""""""""""""""""';
    const quoteText = "(((((((((((())))))))))))";
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.enterClinicalNote(invalidQuoteText);
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.assertText("Please enter a clinical notes. Allowed characters: a-z, A-Z, 0-9, /, #, -,?, (,).")

    dashboardActions.enterClinicalNote(quoteText);
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();
    dashboardActions.assertTextArea(quoteText);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Submit
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-140. Unknown added", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one four zero ${homeActions.randomAlpha(10)}`;
    const lastname = `Added unknown gender`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.clickGender();
    dashboardActions.isGender('Male');
    dashboardActions.isGender('Female');
    dashboardActions.isGender('Unknown');
    dashboardActions.isGender('Other');
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("EDERMPATH-145. eOrder did not upload", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one four five`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertHeader('Clinical indication');
    dashboardActions.backButton();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-146. eOrder no uploading - deleting lesion 1 when there were 3 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one four six`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.clickDeleteLesion()
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
     
  it("EDERMPATH-150. The status is upload failure when creating an order that having a long lastname and 3 lesions continuously ", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(20);
    const lastname = `EDERMPATH one five zero ${homeActions.randomAlpha(20)}`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("EDERMPATH-154. Update field validation and details", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five four ${homeActions.randomAlpha(5)}`;
    const lastname = `Update field validation`;
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    const validNote = "abcdzABCDZ()--/#,1234567890.";
    const invalidNote = "!@@@@@@@$$$$$";
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectBilling(user.billing.DVA);
    dashboardActions.saveDraft();
    dashboardActions.assertAllValidMessage()
    dashboardActions.nextButton();
    dashboardActions.assertAllValidMessage()

    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validText)
    dashboardActions.assertMaxLengthOtherTitle('10')
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(validText);
    dashboardActions.enterCity(validText);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterDVANumber(validDVANumber);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();
    dashboardActions.enterClinicalNote(invalidNote);
    dashboardActions.addBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterClinicalNote(validNote);

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation(invalidNote);
    dashboardActions.saveBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterSpecimenLocation(validNote);
    dashboardActions.saveBodyMap();

     //Upload Dermascopic Images
     dashboardActions.assertHeader('Upload ');
     dashboardActions.uploadImage();
     dashboardActions.startUpload();
     dashboardActions.isImageUploadedSuccessfully();
     dashboardActions.assertFile('1.jpg')
     dashboardActions.nextButtonUploadImg();

      //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
   
  it("EDERMPATH-155. Gender Other, updated 582", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five five ${homeActions.randomAlpha(10)}`;
    const lastname = `Gender Other`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.clickGender();
    dashboardActions.isGender('Male');
    dashboardActions.isGender('Female');
    dashboardActions.isGender('Unknown');
    dashboardActions.isGender('Other');
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
    
  it("EDERMPATH-156. The other's maxlength is changed to 20 after saving", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five six ${homeActions.randomAlpha(10)}`;
    const lastname = `The others maxlength is changed to twenty after saving`;
    const validText = "abcdzABCDZ()--";
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validText)
    dashboardActions.assertMaxLengthOtherTitle('10')
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(validText);
    dashboardActions.enterCity(validText);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertMaxLengthOtherTitle('10')
  });

  it("EDERMPATH-157. Make all the page headings in Arial and not the Images.", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five seven ${homeActions.randomAlpha(10)}`;
    const lastname = `Make all the page headings in Arial and not the Images.`;
    const validText = "abcdzABCDZ()--";
    const validOtherText = "abdzABCZ--.";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    const validNote = "abcdzABCDZ()--/#,1234567890.";
    const invalidNote = "!@@@@@@@$$$$$";
    dashboardActions.assertTitleTop(user.titleTop.dashboard)
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.assertTitleTop(user.titleTop.patientDetails)
    dashboardActions.selectBilling(user.billing.DVA);
    dashboardActions.saveDraft();
    dashboardActions.assertAllValidMessage()
    dashboardActions.nextButton();
    dashboardActions.assertAllValidMessage()

    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText)
    dashboardActions.assertMaxLengthOtherTitle('10')
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(validText);
    dashboardActions.enterCity(validText);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterDVANumber(validDVANumber);
    dashboardActions.nextButton();

    //Clinical Condition
    dashboardActions.assertTitleTop(user.titleTop.patientDetails)
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();
    dashboardActions.enterClinicalNote(invalidNote);
    dashboardActions.addBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterClinicalNote(validNote);

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.assertTitleTop(user.titleTop.addLesionDetails)
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation(invalidNote);
    dashboardActions.saveBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterSpecimenLocation(validNote);
    dashboardActions.saveBodyMap();

     //Upload Dermascopic Images
     dashboardActions.assertHeader('Upload ');
     dashboardActions.uploadImage();
     dashboardActions.startUpload();
     dashboardActions.isImageUploadedSuccessfully();
     dashboardActions.assertFile('1.jpg')
     dashboardActions.nextButtonUploadImg();

      //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertTitleTop(user.titleTop.confirmDetails)
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("EDERMPATH-158. The order is multiplied after multi clicking the save draft button", () => 
  {
    const firstname = `E - one five eight ${homeActions.randomAlpha(10)}`;
    const lastname = `The order is multiplied ${homeActions.randomAlpha(10)}`;
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.dblclicksaveDraft();
    dashboardActions.assertTitleTop(user.titleTop.dashboard)
    dashboardActions.isTheOrderOnlyOne(firstname)
    dashboardActions.isReviewCase('Draft')
  });
    
  it("EDERMPATH-160. Submit one Lesion more than 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
     //Add New Lesion - Patient Details
     const firstname = `EDERMPATH six zero ${homeActions.randomAlpha(10)}`;
     const lastname = `The status is always pending after submitting`;
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("EDERMPATH-163. Patient Details field validation changes", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one six three ${homeActions.randomAlpha(5)}`;
    const lastname = `Patient Details field`;
    const validOtherText = "abdzABCZ--.";
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    homeActions.isDashBoardButtonDisplayed();
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectBilling(user.billing.DVA);
    dashboardActions.saveDraft();
    dashboardActions.assertAllValidMessage()
    dashboardActions.nextButton();
    dashboardActions.assertAllValidMessage()

    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.assertMaxLengthOtherTitle('10');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.clickGender();
    dashboardActions.isGender('Male');
    dashboardActions.isGender('Female');
    dashboardActions.isGender('Unknown');
    dashboardActions.isGender('Other');
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(validText);
    dashboardActions.enterCity(validText);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterDVANumber(validDVANumber);

    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
  
  it("EDERMPATH-166. The page crash after deleting the lesion then double click on back button of the browser", () => 
  {
    const firstname = `E-one six six -${homeActions.randomAlpha(10)}`;
    const lastname = `The page crash after deleting the lesion`;
    const lesion = 'Lesion 1';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
   
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterOtherTitle(validOtherText);
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();
    //Add first lesion
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)

    cy.go('back');
    cy.go('back');
    dashboardActions.assertTitleTop(user.titleTop.confirmDetails)
    dashboardActions.saveDraft()
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
  
  it("EDERMPATH-224. Provider Number must be Unique across the entire eDerm System (Active/Enabled)", () => 
  {
    const clinicName = `Unique testing-${homeActions.randomAlpha(10)}`;
    const providerNumber = clinicActions.randomAlphanumeric(10)
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');
    clinicActions.clickAddNewClinic();

    // Clinic modal
    clinicActions.isModal('Add new clinic');
    clinicActions.enterClinicName(clinicName);
    clinicActions.enterClinicProvidernumber(providerNumber);
    clinicActions.enterClinicAddress();
    clinicActions.enterClinicSubhub();
    clinicActions.enterClinicPostcode();
    clinicActions.selectClinicLab();
    clinicActions.selectClinicState();
    clinicActions.enterClinicPhone();
    clinicActions.enterClinicMobilePhone();
    clinicActions.enterClinicEmail();
    clinicActions.clickSaveClinic();

    clinicActions.reloadClinicPage();

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickAddNewClinic(true);
    clinicActions.isModal('Add new clinic');
    clinicActions.enterClinicName(`${clinicName} copy`);
    clinicActions.enterClinicProvidernumber(providerNumber);
    clinicActions.enterClinicAddress();
    clinicActions.enterClinicSubhub();
    clinicActions.enterClinicPostcode();
    clinicActions.selectClinicLab();
    clinicActions.selectClinicState();
    clinicActions.enterClinicPhone();
    clinicActions.enterClinicMobilePhone();
    clinicActions.enterClinicEmail();
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isFirstClinicNameNotExist(`${clinicName} copy`); 
  });
  
  it("EDERMPATH-232. Clinic status Disabled", () => 
  {
    const clinicName = `Unique testing-${homeActions.randomAlpha(10)}`;
    const providerNumber = clinicActions.randomAlphanumeric(10)
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');
    clinicActions.clickAddNewClinic();

    // Clinic modal
    clinicActions.isModal('Add new clinic');
    clinicActions.enterClinicName(clinicName);
    clinicActions.enterClinicProvidernumber(providerNumber);
    clinicActions.enterClinicAddress();
    clinicActions.enterClinicSubhub();
    clinicActions.enterClinicPostcode();
    clinicActions.selectClinicLab();
    clinicActions.selectClinicState();
    clinicActions.enterClinicPhone();
    clinicActions.enterClinicMobilePhone();
    clinicActions.enterClinicEmail();
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isFirstClinicNameExist(clinicName); 
    clinicActions.reloadClinicPage();

    clinicActions.clickFirstInactiveClinicButton();
    clinicActions.assertClinicStatusByIndex('Disabled')

    clinicActions.clickHrefByText('Dashboard');
    clinicActions.assertTextClinicOptionByIndex(`${clinicName} (Disabled)`,1)

  });
  
  it("EDERMPATH-241. The reset password link does not present after logining with an invalid value", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword('00');
    loginActions.clickLoginButton();
    loginActions.assertText('If you need to reset your password go to www.sonicdx.com.au')
    loginActions.assertText('Ensure that Image Transfer request form stationery is loaded into the printer.')
    loginActions.assertText('Contact us 1300 754 639 ')
    loginActions.assertText('Privacy Policy')
    loginActions.assertUrl('/login/user_login')
    loginActions.clickHrefByText('Privacy Policy')
    loginActions.assertUrl('/media/Multisite1434/shl_privacypolicy.pdf')
  });

  it("EDERMPATH-243. Allow a case to be added with no images added", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `Ederm-${homeActions.randomAlpha(10)}`;
    const lastname = `No images added`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionNoImage(0)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-244. \"Continue with no image button\" appears at the Body map after backing from the add image screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `Edermpath-${homeActions.randomAlpha(10)}`;
    const lastname = `Continue with no image button`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.isBackButtonOfUploadImageInLessionDetails()
    dashboardActions.clickBackButtonOfUploadImageInLessionDetails()
    dashboardActions.clickBackToBody()
    dashboardActions.assertTextIsNotVisible('Continue with no images');
  });

  it("EDERMPATH-245. Lock the Patient Details fields on the summary page and add an edit button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `Ederm-${homeActions.randomAlpha(10)}`;
    const lastname = `check Lock the Patient Details`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionNoImage(0)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.checkAllPatientDetailsISDisabled();
    dashboardActions.isEditPatientDetailsVisible();
  });

  it("EDERMPATH-246. Upload a photo with an invalid format, the next button is not available", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const firstname = `EDERMPATH-${homeActions.randomAlpha(5)}`;
    const lastname = `invalid format image`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByInvalidImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
  });
  
  it("EDERMPATH-251. After editing patient details display a confirm details window.", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const firstname = `EDERMPATH-${homeActions.randomAlpha(5)}`;
    const lastname = `confirm details window`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.checkAllPatientDetailsISDisabled();
    dashboardActions.isEditPatientDetailsVisible();
    dashboardActions.saveDraft();
    dashboardActions.assertTitleTop('Dashboard');
    dashboardActions.assertFirstName(firstname);
    dashboardActions.isReviewCase('Draft');
    dashboardActions.clickPathologyRequestByFirstName(firstname);
    
    dashboardActions.checkAllPatientDetailsISDisabled();
    dashboardActions.isEditPatientDetailsVisible();
    dashboardActions.clickEditPatientDetails();
    dashboardActions.selectBilling(user.billing.bulkBill);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.clickSavePatientDetails();
    dashboardActions.clickOkPatientDetails();
  
    dashboardActions.clickHrefByText('Save update');
    dashboardActions.assertTitleTop('Dashboard')
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertSelectedBilling(user.billing.bulkBill)

  });
  
  it("EDERMPATH-260. Change dashboard page screen layout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.assertText('Create New Pathology Request');
    dashboardActions.assertText('Sonic Dx account:');
    dashboardActions.assertText('Site ID:');
    dashboardActions.assertText('Default clinic:');
    dashboardActions.assertText('Filter cases by clinic:');
    dashboardActions.assertText('Search');
    dashboardActions.assertElement('[href="/cases?urgent=1"]');
    dashboardActions.assertButton('Search');
  });
  
  it("EDERMPATH-263. Enable the edit of the \"Do not send reports ...\" check box (128)", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `Ederm-${homeActions.randomAlpha(10)}`;
    const lastname = "the Do not send reports";
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionNoImage(0)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.checkAllPatientDetailsISDisabled();
    dashboardActions.isEditPatientDetailsVisible();

    dashboardActions.clickEditPatientDetails();
    dashboardActions.clickOnTheDoNotSendCheckBox();
    dashboardActions.isDoNotSendChecked;
    dashboardActions.clickSavePatientDetails();
    dashboardActions.clickOkPatientDetails();
  });
    
  it("EDERMPATH-272. Default clinic not being set correctly on login", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    // Check default clinic
    dashboardActions.selectAndCheckDefaultClinic(2);

    dashboardActions.logOut();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
        // Check default clinic
    dashboardActions.selectAndCheckDefaultClinic(3);
  });
    
  it("EDERMPATH-274. Add Schedule Fee to Billing Options", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const firstname = `EDERMPATH-${homeActions.randomAlpha(5)}`;
    const lastname = `Add Schedule Fee`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.selectBilling(user.billing.scheduleFee);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.checkPrivate();
    dashboardActions.saveDraft();
  });
    
  it("EDERMPATH-276. [Schedule fee]: The Medicare Number textbox is disappeared after backing from the lesion screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const firstname = `EDERMPATH-${homeActions.randomAlpha(5)}`;
    const lastname = `Medicare Number check`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.selectBilling(user.billing.scheduleFee);
    dashboardActions.checkPrivate();
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();
    dashboardActions.backButton();
    dashboardActions.assertText('Add patient details');
    dashboardActions.assertText('Copy reports to');
    dashboardActions.assertText('Save draft »');
    dashboardActions.assertMedicare(user.medicareChecked);
    dashboardActions.isPrivateChecked();
  });
    
  it("EDERMPATH-277. The clinic selector not be saved after backing from the lesion screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const firstname = `EDERMPATH-${homeActions.randomAlpha(5)}`;
    const lastname = `clinic selector`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.selectBilling(user.billing.scheduleFee);
    dashboardActions.checkPrivate();
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.selectAndCheckPatientClinic(1);
  });
      
  it("EDERMPATH-280. Set default state for new clinic to Blank", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
   
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup', true);

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickHrefByText('Add new clinic');

    // Clinic modal
    clinicActions.isModal('Add new clinic');
    clinicActions.assertTextClinicStateByIndex()
  });
});
  