import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Add New Lesion on eDerm", function () {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();

  it("01. Submit one Lesion more than 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `one Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

  it("02. Submit two Lesion more than 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `two Lesions ${homeActions.randomAlpha(20)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("03. Submit three Lesion more than 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesions ${homeActions.randomAlpha(20)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("04. Submit four Lesion more than 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four Lesions ${homeActions.randomAlpha(20)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionMoreThan4Images(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("05. Submit four Lesion 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("06. Submit four Lesion 3 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `three images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("07. Submit four Lesion 2 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `two images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("08. Submit four Lesion 1 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `one images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("09. Submit three Lesion 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("10. Submit three Lesion 3 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `three images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("11. Submit three Lesion 2 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `two images ${homeActions.randomAlpha(10)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("12. Submit three Lesion 1 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `one images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("13. Submit two Lesion 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `two Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("14. Submit two Lesion 3 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `two Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `three images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(3);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("15. Submit two Lesion 2 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `two Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `two images ${homeActions.randomAlpha(10)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionMoreThan4Images(2);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("16. Submit three Lesion 1 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `one images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("17. Submit one Lesion 4 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `one Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `four images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("18. Submit one Lesion 3 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `one Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `three images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(3);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("19. Submit one Lesion 2 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `one Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `two images ${homeActions.randomAlpha(10)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionMoreThan4Images(2);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("20. Submit one Lesion 1 images", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three Lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `one images ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("21. 3 lesions, 1 image delete the second lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the second lesion`;
    const lesion = 'Lesion 3';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("22. 3 lesions, 1 image delete the first and second lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the first and second lesion`;
    const lesion1 = 'Lesion 1';
    // const lesion2= 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("23. 3 lesions, 1 image delete the 2 and 3 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the second and third lesion`;
    const lesion1 = 'Lesion 2';
    // const lesion2= 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("24. 3 lesions, 1 image delete the 1 and 3 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `three lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the second and third lesion`;
    const lesion1 = 'Lesion 1';
    const lesion2= 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion2)
    dashboardActions.assertText(lesion2)
    dashboardActions.clickDeleteLesion(lesion2)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("25. 4 lesions, 1 image delete the first lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the first lesion`;
    const lesion = 'Lesion 1';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("26. 4 lesions, 1 image delete the second lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the second lesion`;
    const lesion = 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("27. 4 lesions, 1 image delete the third lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the third lesion`;
    const lesion = 'Lesion 3';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("28. 4 lesions, 1 image delete the fourth lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `the fourth lesion`;
    const lesion = 'Lesion 4';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("28. 4 lesions, 1 image delete the 1 2 3 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `first second third lesion`;
    const lesion = 'Lesion 1';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("29. 4 lesions, 1 image delete the 2 3 4 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `second third fourth lesion`;
    const lesion = 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("30. 4 lesions, 1 image delete the 4 3 2 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `four third two lesion`;
    let num = 4;
    let lesion = `Lesion ${num}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    lesion = `Lesion ${--num}`

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    lesion = `Lesion ${--num}`

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("31. 4 lesions, 1 image delete the 1 2 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `first second lesion`;
    const lesion = 'Lesion 1';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("32. 4 lesions, 1 image delete the  3 4 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `third fourth lesion`;
    const lesion = 'Lesion 3';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("33. 4 lesions, 1 image delete the  2 3 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `second third lesion`;
    const lesion = 'Lesion 2';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("34. 4 lesions, 1 image delete the  1 4 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `one fourth lesion`;
    let num = 1
    let lesion = `Lesion ${num}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    lesion = `Lesion ${num + 2}`
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("35. 4 lesions, 1 image delete the  2 4 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `second third lesion`;
    let num = 2
    let lesion = `Lesion ${num}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    lesion = `Lesion ${num + 1}`

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
      
  it("36. 4 lesions, 1 image delete the  1 3 lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion one image ${homeActions.randomAlpha(20)}`;
    const lastname = `second third lesion`;
    let num = 1
    let lesion = `Lesion ${num}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Other');
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

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');
    lesion = `Lesion ${++num}`

    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion)
    dashboardActions.assertText(lesion)
    dashboardActions.clickDeleteLesion(lesion)
    dashboardActions.assertText('Submit request & print');

    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
});
  