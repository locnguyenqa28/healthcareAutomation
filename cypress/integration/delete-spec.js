import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Delete lesion on eDerm", function () {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();

  it("01. 3 lesions, 1 image delete the second lesion", function () 
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
    
  it("02. 3 lesions, 1 image delete the first and second lesion", function () 
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
    
  it("03. 3 lesions, 1 image delete the 2 and 3 lesion", function () 
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
    
  it("04. 3 lesions, 1 image delete the 1 and 3 lesion", function () 
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
    
  it("05. 4 lesions, 1 image delete the first lesion", function () 
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
    
  it("06. 4 lesions, 1 image delete the second lesion", function () 
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
    
  it("07. 4 lesions, 1 image delete the third lesion", function () 
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
    
  it("08. 4 lesions, 1 image delete the fourth lesion", function () 
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
    
  it("09. 4 lesions, 1 image delete the 1 2 3 lesion", function () 
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
    
  it("10. 4 lesions, 1 image delete the 2 3 4 lesion", function () 
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
    
  it("11. 4 lesions, 1 image delete the 4 3 2 lesion", function () 
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
      
  it("12. 4 lesions, 1 image delete the 1 2 lesion", function () 
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
      
  it("13. 4 lesions, 1 image delete the  3 4 lesion", function () 
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
      
  it("14. 4 lesions, 1 image delete the  2 3 lesion", function () 
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
      
  it("15. 4 lesions, 1 image delete the  1 4 lesion", function () 
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
      
  it("16. 4 lesions, 1 image delete the  2 4 lesion", function () 
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
      
  it("17. 4 lesions, 1 image delete the  1 3 lesion", function () 
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
  