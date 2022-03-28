import user from "../../support/constants";
import { LoginActions } from "../../pages/loginAction";
import { DashboardActions } from "../../pages/dashboardActions";
import { HomeActions } from "../../pages/homeAction";
import { ClinicActions } from "../../pages/clinicActions";

describe("Print Preview part 2 testing", () => {
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

  it("Print Preview: add 6 Lesions - Delete 5 lesions - 5 images", () => 
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
    dashboardActions.deleteLesionByName(lesion1,5);

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

  it("Print Preview: add 7 Lesions - Delete 6 lesions - 5 images", () => 
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
    dashboardActions.deleteLesionByName(lesion1,6);

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

  it("Print Preview: add 8 Lesions - Delete 7 lesions - 5 images", () => 
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
    dashboardActions.deleteLesionByName(lesion1,7);

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

  it("Print Preview: add 9 Lesions - Delete 8 lesions - 5 images", () => 
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
    dashboardActions.deleteLesionByName(lesion1,8);

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

  it("Print Preview: add 10 Lesions - Delete 10 lesions - 5 images", () => 
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
    dashboardActions.deleteLesionByName(lesion1,9);

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

  it("Print Preview: add 6 Lesions - Delete 1 lesions - 6 images", () => 
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
    dashboardActions.addAndValidateLesionLimitedImage(6)

    dashboardActions.addMoreMultiLesionsLimitedImage(5, 6)

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

  it("Print Preview: add 7 Lesions - Delete 1 lesions - 7 images", () => 
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
    dashboardActions.addAndValidateLesionLimitedImage(7)

    dashboardActions.addMoreMultiLesionsLimitedImage(6, 7)

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

  it("Print Preview: add 8 Lesions - Delete 1 lesions - 8 images", () => 
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
    dashboardActions.addAndValidateLesionLimitedImage(8)

    dashboardActions.addMoreMultiLesionsLimitedImage(7, 8)

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

  it("Print Preview: add 9 Lesions - Delete 1 lesions - 9 images", () => 
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
    dashboardActions.addAndValidateLesionLimitedImage(9)

    dashboardActions.addMoreMultiLesionsLimitedImage(8, 9)

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

  it("Print Preview: add 10 Lesions - Delete 1 lesions - 10 images", () => 
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
    dashboardActions.addAndValidateLesionLimitedImage(10)

    dashboardActions.addMoreMultiLesionsLimitedImage(9, 10)

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
  