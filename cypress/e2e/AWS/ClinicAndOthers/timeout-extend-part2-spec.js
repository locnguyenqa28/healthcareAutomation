import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";
import { TimeoutActions } from "../../../pages/timeoutActions";

describe("Timeout", () => {
  user.username = user.username1
  user.password = user.password1
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();
  const timeoutActions = new TimeoutActions();
  const timeoutSession = 7;
  const timeoutLogin = 2;

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

  it("The Extend and Logout popups able to visible at dashboard screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 30000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)
 
    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });
    
  it("The Extend and Logout popup able to visible at print preview screen", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
  cy.wait(timeoutLoginMs/2)
  cy.wait(extraTime)

  dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
  dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
  dashboardActions.assertText('Log off and close')

  cy.wait(timeoutLoginMs/2)
  cy.wait(extraTime)

  dashboardActions.assertText('You have been logged out for security purposes - click ')
  dashboardActions.assertText('Exit eDerm')
  });

  it("The Extend and Logout popup able to visible at uploadImage - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)
  
    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });
  
  it("The Extend and Logout popup able to visible at the Clinical indication - empty", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)
  
    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });

  it("The Extend and Logout popup able to visible at the Clinical indication - filled", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)


    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)
  
    dashboardActions.assertText('You have been logged out for security purposes - click ')
    dashboardActions.assertText('Exit eDerm')
  });
  
  it("Make sure the patient details is saved after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)
    timeoutActions.clickExtend()

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    dashboardActions.assertValueFirstNameInPatientDetails(firstname)
    dashboardActions.assertValueLastNameInPatientDetails(lastname)
    dashboardActions.assertValueTitleInPatientDetails('Mrs')
    dashboardActions.assertValueGenderInPatientDetails('U')
  });
  
  it("Make sure the 'Copy reports to' is saved after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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

    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')
   
    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    
    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)
    timeoutActions.clickExtend()

    dashboardActions.assertValueFirstNameInPatientDetails(firstname)
    dashboardActions.assertValueLastNameInPatientDetails(lastname)
    dashboardActions.assertValueTitleInPatientDetails('Mrs')
    dashboardActions.assertValueGenderInPatientDetails('U')

    dashboardActions.assertFirstNameCopy1('Copy A')
    dashboardActions.assertFirstNameCopy2('Copy B')
    dashboardActions.assertFirstNameCopy3('Hospital')
  });
  
  it("Make sure the Clinical indication - filled after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)
    timeoutActions.clickExtend();
  });

  it("Make sure the Body Map - filled after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    dashboardActions.enterSpecimenLocation('the automation testing');
    
    const timeoutLoginMs =  timeoutLogin * 60000
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minute`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minute`)
    dashboardActions.assertText('Log off and close')

    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)
    timeoutActions.clickExtend()

    dashboardActions.assertValueSpecimenLocationInBodyMap('the automation testing');
  });

  it("Make sure the Upload image - no image after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)


    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)  
    timeoutActions.clickExtend()

    dashboardActions.assertText('Continue with no images')
  });

  it("Make sure the Upload image - 3 images is saved after clicking on extend button", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `extend-${homeActions.randomAlpha(10)}`;
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
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    timeoutActions.assertTimeOutModalVisible()
    timeoutActions.enterPasswordInExtend(user.password)  
    timeoutActions.clickExtend()

    dashboardActions.assertNumberElement('.delete button.btn', 3)
  });


});