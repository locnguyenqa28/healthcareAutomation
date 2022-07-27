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
  const timeoutSession = 1;
  const timeoutLogin = 2;

  before('De-Active Signle account login',() => {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.wait(3000);
    dashboardActions.setTimeoutSession(timeoutSession);
    cy.wait(2000);
    dashboardActions.setTimeoutLogin(timeoutLogin);
  });

  it("Make sure Unable to view or modify the clinic after the session is time out", () => 
  {
    const clinicName = `checklinks-${homeActions.randomAlpha(10)}`;
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');
    clinicActions.clickHrefByText('Add new clinic');

    // Clinic modal
    clinicActions.isModal('Add new clinic');
    clinicActions.enterClinicName(clinicName);
    clinicActions.enterClinicProvidernumber();
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
    clinicActions.reloadClinicPage();
    clinicActions.isClinicTable();
    clinicActions.isClinicName(clinicName); 
    dashboardActions.getUrlLogoutThenVisit();
  });

});