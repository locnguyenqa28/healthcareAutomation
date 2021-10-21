import user from "../support/constants";
import { LoginActions } from "../pages/loginAction";
import { DashboardActions } from "../pages/dashboardActions";
import { HomeActions } from "../pages/homeAction";
import { ClinicActions } from "../pages/clinicActions";

describe("Four lesion testing - Only AWS", () => {
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();

  it("Submit four Lesion more than 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four Lesions ${homeActions.randomAlpha(20)}`;
    const lastname = `more than four images ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Submit four Lesion 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `four images ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Submit four Lesion 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `three images ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.addALesionByNumberImages(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(3);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(3);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Submit four Lesion 2 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `two images ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.addALesionByNumberImages(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(2);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(2);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Submit four Lesion 1 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `four lesion ${homeActions.randomAlpha(20)}`;
    const lastname = `one images ${homeActions.randomAlpha(20)}`;
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
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
 
  it("Submit four Lesion No image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `submit-${homeActions.randomAlpha(10)}`;
    const lastname = `four lesions no image`;
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
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
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("The SaveDraftAPI can be submitted with 4 lesion + two copy and Hospital", () => 
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


    dashboardActions.addAnotherLesion();
     //Add first lesion
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("The SaveDraftAPI can be submitted with 4 lesion no image", () => 
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

    dashboardActions.addAnotherLesion();
     //Add first lesion
    dashboardActions.addALesionNoImage();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionNoImage();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionNoImage();

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionNoImage();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
});
  