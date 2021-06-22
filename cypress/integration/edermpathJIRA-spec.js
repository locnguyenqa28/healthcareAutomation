import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Verify bug on EDERMPATH JIRA", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const validOtherText = "abdzABCZ--.";
  
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
    dashboardActions.clickPathologyRequestByFristName(firstname)
    dashboardActions.isTitle(title)
  });
  
  it("EDERMPATH-119. The Laboratory is not be saved after backing", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname;
    const lastname = `EDERMPATH one one nine`;
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
    dashboardActions.assertAllLabNextAndBack();
  });
  
  it("EDERMPATH-119. The Laboratory is not be saved after backing - Draft", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `${user.lastname} EDERMPATH one one nine`;
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
    dashboardActions.assertAllLabSaveAndDraft(firstname);
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
    dashboardActions.assertText("Please enter a clinical notes. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).")

    dashboardActions.enterClinicalNote(quoteText);
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertTitle('Upload ');
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
  
  it("EDERMPATH-141. Return to setup screen from Edit Account", () => 
  {
    const subhurb = `Pattaya City ${dashboardActions.randomAlphanumeric(5)}`
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Setup
    dashboardActions.clickSetup();
    dashboardActions.assertText('Account Setup');
    dashboardActions.clickEditAccount();
    dashboardActions.enterSubHurbAccount(subhurb);
    dashboardActions.selectStateAccount();
    dashboardActions.clickSaveUpdateAccount();
    dashboardActions.assertText('Account Setup');
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
    dashboardActions.assertTitle('Upload ');
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
    dashboardActions.assertTitle('Clinical indication');
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

  it("EDERMPATH-64. Back button is not functional after backing from the Body Map", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH six four`;
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
    dashboardActions.assertTitle('Body map');
    dashboardActions.backButton();
    dashboardActions.assertTitle('Clinical indication')
    dashboardActions.backButton();
    dashboardActions.isPatientDetails('Patient details')
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
  
  it("EDERMPATH-62. The delete button is not presented after adding a new lesion", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH six two`;
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
  
  it("EDERMPATH-76. The Laboratory selector is disappeared after adding new conditions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH seven six`;
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
    dashboardActions.selectLab(user.lab[4])
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();
    dashboardActions.caseSummary();
    dashboardActions.isLab(user.lab[4])

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.isLab(user.lab[4])
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
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
    dashboardActions.assertTitle('Upload');
    dashboardActions.assertTitle('Lesion');
    dashboardActions.assertTitle('Images');
    dashboardActions.backButton(true);
    dashboardActions.assertTitle('Clinical indication');
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
  
  it("EDERMPATH-151. Upload issue from Melanie", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five one ${homeActions.randomAlpha(20)}`;
    const lastname = `Upload issue from Melanie ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.assertTitle('Upload ');
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Click on Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton();

    // Add additions Images
    dashboardActions.uploadAdditionalImages(1)
    
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Add additional images')

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
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
    dashboardActions.assertFirstName(firstname)

    homeActions.isDashboardDisplayed();
    dashboardActions.isReviewCase('Draft')

    dashboardActions.clickPathologyRequestByFristName(firstname);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard');
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)

    homeActions.isDashboardDisplayed();
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

    dashboardActions.assertAllStateSaveAndDraft(firstname); 
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
    
  it("EDERMPATH-154. Update field validation and details", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five four ${homeActions.randomAlpha(10)}`;
    const lastname = `Update field validation and details`;
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    const validNote = "abcdzABCDZ()--/#,1234567890.";
    const invalidNote = "!@@@@@@@$$$$$";
    dashboardActions.clickAddNewLesion();
    dashboardActions.selecBilling(user.billing.DVA);
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
     dashboardActions.assertTitle('Upload ');
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

    dashboardActions.clickPathologyRequestByFristName(firstname);
    dashboardActions.assertMaxLengthOtherTitle('10')
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
    dashboardActions.addALesionMoreThan4Images(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(1);

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
    dashboardActions.clickAddNewLesion();
    dashboardActions.assertTitleTop(user.titleTop.patientDetails)
    dashboardActions.selecBilling(user.billing.DVA);
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
     dashboardActions.assertTitle('Upload ');
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
    dashboardActions.addALesionMoreThan4Images(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(1);

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
    dashboardActions.assertTitle('Upload ');
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
    dashboardActions.addALesionMoreThan4Images(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-84. Unable to move to any sections after uploading images using the backing image upload", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
     //Add New Lesion - Patient Details
     const firstname = `EDERMPATH eight four ${homeActions.randomAlpha(10)}`;
     const lastname = ` Unable to move to any sections`;
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
    dashboardActions.addALesionMoreThan4Images(5)
    
    dashboardActions.clickBackToUploadImage()
    dashboardActions.clickDeleteImage()
    dashboardActions.isBackButtonOfUploadImage()
    dashboardActions.isNextButtonOfUploadImage()

    //Upload Dermascopic Images
    dashboardActions.assertTitle('Upload ');
    dashboardActions.uploadMultiImages(5);
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
  
  it("EDERMPATH-71. Previous history field selection is inconsistent", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
     //Add New Lesion - Patient Details
     const firstname = `EDERMPATH seven one ${homeActions.randomAlpha(10)}`;
     const lastname = `Previous history field selection is inconsistent`;
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
    dashboardActions.assertTitle('Upload ');
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
    dashboardActions.assertProvisionalDiagnosis()
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
    dashboardActions.assertTitle('Upload ');
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
      
  it("EDERMPATH-163. Patient Details field validation changes", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Setup
    dashboardActions.clickSetup();
    dashboardActions.assertText('Account Setup');
    dashboardActions.clickEditAccount();
    dashboardActions.assertAddress();
    dashboardActions.isStateDropdownVisible()
    dashboardActions.clickHrefByText('Dashboard')
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one seix three ${homeActions.randomAlpha(10)}`;
    const lastname = `Patient Details field validation changes`;
    const validOtherText = "abdzABCZ--.";
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selecBilling(user.billing.DVA);
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
    
});
  