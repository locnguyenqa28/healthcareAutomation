import user from "../../support/constants";
import { LoginActions } from "../../pages/loginAction";
import { DashboardActions } from "../../pages/dashboardActions";
import { HomeActions } from "../../pages/homeAction";
import { ClinicActions } from "../../pages/clinicActions";

describe("Save Draft by API", () => {
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();

  it("saveDraft by API is successfull", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    //Case Summary
    dashboardActions.assertText(firstname)
  });

  it("Edit saveDraftAPI successfull", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    const editname = `Edit-API-${dashboardActions.randomAlpha(10)}`
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    //Case Summary
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.clickEditPatientDetails();
    dashboardActions.enterFirstName(editname);
    dashboardActions.clickSavePatientDetails();
    dashboardActions.clickOkPatientDetails();

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    dashboardActions.assertText(editname);
  });

  it("EDERMPATH-220 - Check the API will add the Draft to the Default Clinics/Laboratory", () => 
  {
    const firstname = `API-${dashboardActions.randomAlpha(10)}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.checkOrderIsAddedToClinicDefault(firstname);
  });

  it("The SaveDraftAPI can be save one copy", () => 
  {
    const subname = dashboardActions.randomAlpha(10)
    const firstname = `API-${subname}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(subname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(subname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(subname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });

  it("The SaveDraftAPI can be save two copy", () => 
  {
    const subname = dashboardActions.randomAlpha(10)
    const firstname = `API-${subname}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(subname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(subname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(subname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')
  });

  it("The SaveDraftAPI can be save two copy and Hospital", () => 
  {
    const subname = dashboardActions.randomAlpha(10)
    const firstname = `API-${subname}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(subname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(subname);

    // Copies report
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

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(subname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')
    
    dashboardActions.assertValueVisible('Hospital')
    dashboardActions.assertValueVisible('Ward ')
    dashboardActions.assertValueVisible('suburb C')
  });

  it("The SaveDraftAPI can be save only Hospital", () => 
  {
    const subname = dashboardActions.randomAlpha(10)
    const firstname = `API-${subname}`;
    cy.saveDraft(user.username, user.password, firstname);
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(subname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(subname);

    // Copies report
    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(subname);
    
    dashboardActions.assertValueVisible('Hospital')
    dashboardActions.assertValueVisible('Ward ')
    dashboardActions.assertValueVisible('suburb C')
  });

});