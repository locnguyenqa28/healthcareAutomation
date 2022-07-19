import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";

describe("Print Preview part 1 testing", () => {
  user.username = user.username1
  user.password = user.password1
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();
  const validOtherText = "abdzABCZ--.";
  const lesion1 = 'Lesion 1';
  const lesion2 = 'Lesion 2';
  const lesion3 = 'Lesion 3';
  const lesion4 = 'Lesion 4';

      
  before('De-Active Signle account login',() => {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.wait(3000);
    dashboardActions.activeSingleAccountLogin(0);
  });

  // const medicareCode = dashboardActions.convertMedicareWithSymbol(user.medicare, "-")
  it("Print Preview: 1 Lesion - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addALesionByNumberImages(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 2 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 3 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 4 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 5 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(4, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 6 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(5, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 7 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(6, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 8 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(7, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 9 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(8, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: 10 Lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(9, 5)


    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 2 Lesions - Delete 1 lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(1, 5)

    //Case Summary
    dashboardActions.caseSummary();
    
    dashboardActions.deleteLesionByName(lesion1, 1);

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 3 Lesions - Delete 2 lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(2, 5)

    //Case Summary
    dashboardActions.caseSummary();
    
    dashboardActions.deleteLesionByName(lesion1, 2);

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 4 Lesions - Delete 1 lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(3, 5)

    //Case Summary
    dashboardActions.caseSummary();
    
    dashboardActions.deleteLesionByName(lesion1, 1);

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 4 Lesions - Delete 2 last lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(3, 5)

    //Case Summary
    dashboardActions.caseSummary();
    
    dashboardActions.deleteLesionByName(lesion4, 1)
    dashboardActions.deleteLesionByName(lesion3, 1)

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 4 Lesions - Delete 2 first lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(3, 5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.deleteLesionByName(lesion1, 2)
    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 4 Lesions - Delete 3 lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(3, 5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.deleteLesionByName(lesion1,3);

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Print Preview: add 5 Lesions - Delete 1 lesions - 5 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `printcase ${homeActions.randomAlpha(10)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(10)}`;
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
    dashboardActions.addAndValidateLesionLimitedImage(5)

    dashboardActions.addMoreMultiLesionsLimitedImage(4, 5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.deleteLesionByName(lesion1,1);

    dashboardActions.submitCasePrint();
    dashboardActions.printCaseCheckingBasic();
    dashboardActions.printCaseCheckingPatients(
      firstname,
      lastname,
      user.DOB,
      user.address,
      user.city,
      // medicareCode
    )
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
});
  