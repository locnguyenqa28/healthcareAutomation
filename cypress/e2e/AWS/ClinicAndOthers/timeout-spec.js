import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";

describe("Timeout", () => {
  user.username = user.username1
  user.password = user.password1
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();
  const timeoutSession = 6;
  const timeoutLogin = 1;

  before('Set timeout',() => {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    dashboardActions.setTimeoutLogin(timeoutLogin);
    cy.wait(3000);
    dashboardActions.setTimeoutSession(timeoutSession);
    cy.wait(2000);
  });

  after('Reset timeout',() => {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    dashboardActions.setTimeoutLogin(60);
    cy.wait(3000);
    dashboardActions.setTimeoutSession(65);
    cy.wait(2000);
  });

  it("The timeout popup able to visible at the patient details", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `save ${homeActions.randomAlpha(10)}`;
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
    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at the Clinical indication - empty", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();
    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at the Clinical indication - filled", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at the Body Map - empty", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at the Body Map - filled", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    //Case bodymap
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at the Image - no upload", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    //Case bodymap
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at uploadImage - 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    //Case bodymap
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(3);
    cy.wait(500);
    dashboardActions.assertText('Remove');
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at uploadImage - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    //Case bodymap
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiInvalidImages(3);
    cy.wait(500);
    dashboardActions.assertText('Remove');
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });
  
  it("The timeout popup able to visible at lesion 1 - completed", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
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
    dashboardActions.addBodyMap();

    //Case bodymap
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(3);
    cy.wait(500);
    dashboardActions.assertText('Remove');
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.nextButtonUploadImg(30000, true);

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at lesion 2 completed", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

   //Add first lesion
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)


    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at lesion 3 completed", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

   //Add first lesion
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)


    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at lesion 4 completed", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

   //Add first lesion
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)


    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at print preview screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `timeout-${homeActions.randomAlpha(10)}`;
    const lastname = `${homeActions.randomAlpha(5)}`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Male');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

   //Add first lesion
   dashboardActions.addALesionByNumberImages(3)

   //Add another lesion
   dashboardActions.addAnotherLesion()
   dashboardActions.addALesionByNumberImages(3)
    //Case Summary
  dashboardActions.caseSummary();
  dashboardActions.submitCasePrint();


    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The timeout popup able to visible at dashboard screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

});