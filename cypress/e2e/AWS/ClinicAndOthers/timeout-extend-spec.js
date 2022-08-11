import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";

describe("Timeout-extend", () => {
  user.username = user.username1
  user.password = user.password1
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();
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

  it("The timeout-extend popup able to visible at the patient details", () => 
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minutes`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minutes`)
    dashboardActions.assertText('Log off and close')
  });

  it("The timeout-extend popup able to visible at the Clinical indication - empty", () => 
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minutes`)
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minutes`)
    dashboardActions.assertText('Log off and close')
  });

  it("The timeout-extend popup able to visible at the Clinical indication - filled", () => 
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
    const extraTime = 10000
    cy.wait(timeoutLoginMs/2)
    cy.wait(extraTime)

  
    dashboardActions.assertText(`You will be automatically logged out in ${timeoutLogin/2} minutes`);
    dashboardActions.assertText(`Extend for ${timeoutLogin/2} minutes`);
    dashboardActions.assertText('Log off and close');
  });

});