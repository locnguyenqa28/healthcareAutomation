import { LoginActions } from "../../../pages/loginAction";
import { HomeActions } from "../../../pages/homeAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { ClinicActions } from "../../../pages/clinicActions";
import user from "../../../support/constants"


describe("Laboratory checking", () => {
    user.username = user.username1
    user.password = user.password1
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const clinicActions = new ClinicActions();

    const validDVANumber = 'Abc12345678';
    const invalidSymbol = "%";
         
  it("Laboratory - Clinic - edit Laboratory & submit 5 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(4, 4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("Laboratory - Clinic - edit Laboratory & submit 6 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(5, 4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("Laboratory - Clinic - edit Laboratory & submit 7 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(6, 4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("Laboratory - Clinic - edit Laboratory & submit 8 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(7, 4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("Laboratory - Clinic - edit Laboratory & submit 9 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(8,4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
         
  it("Laboratory - Clinic - edit Laboratory & submit 10 lesions limited image", () => 
  {
    const clinicName = 'validationxzzLP';
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickEditClinicButtonByName(clinicName);
    clinicActions.isModal('Edit a clinic');
    clinicActions.editAndVerifyClinicLabByIndex()

    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `laboratory ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName(clinicName);
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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    dashboardActions.addMoreMultiLesionsLimitedImage(9, 4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
});