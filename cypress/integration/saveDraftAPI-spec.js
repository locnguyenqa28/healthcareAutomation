import user from "../support/constants";
import { LoginActions } from "../pages/loginAction";
import { DashboardActions } from "../pages/dashboardActions";
import { HomeActions } from "../pages/homeAction";

describe("Save Draft by API", () => {
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();

  it("01. saveDraft by API is successfull", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Case Summary
    dashboardActions.assertText(firstname)
  });

  it("02. Edit saveDraftAPI successfull", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    const editname = `Edit-API-${dashboardActions.randomAlpha(10)}`
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Case Summary
    dashboardActions.assertText(firstname);

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.enterFirstName(editname);

    dashboardActions.clickHrefByText('Save update');
    dashboardActions.assertText(editname);
  });

  it("03.EDERMPATH-220 - Check the API will add the Draft to the Default Clinics/Laboratory", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    dashboardActions.checkOrderIsAddedToClinicDefault(firstname);
  });

});