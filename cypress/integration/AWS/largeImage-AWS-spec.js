import { LoginActions } from "../../pages/loginAction";
import { HomeActions } from "../../pages/homeAction";
import { DashboardActions } from "../../pages/dashboardActions";
import user from "../../support/constants"


describe("Large image testing - AWS", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();

  it("1. Multiple Large images - 1 lesions 4.9Mb x 3 images - 1", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiPathologyRequestLargeImagesBySelectRegionV2('4.9_2.jpg', 1, 1, 1);
  });

  it("2. Multiple Large images - 2 lesions 4.9Mb x 3 images - 2", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiPathologyRequestLargeImagesBySelectRegionV2('4.9_2.jpg', 2, 1, 2);
  });

  it("3. Multiple Large images - 3 lesions 4.9Mb x 3 images - 3", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiPathologyRequestLargeImagesBySelectRegionV2('4.9_2.jpg', 3, 1, 3);
  });

  it("4. Multiple Large images - 4 lesions 4.9Mb x 3 images - 4", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiPathologyRequestLargeImagesBySelectRegionV2('4.9_2.jpg', 4, 1, 4);
  });

  it("5. Submit the large images after Deleting a Lesion - 2 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndDeleteLesion('4.9_2.jpg', 2, 1, 2);
  });

  it("6. Submit the large images after Deleting a Lesion - 3 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndDeleteLesion('4.9_2.jpg', 3, 1, 3);
  });

  it("7. Submit the large images after Deleting a Lesion - 4 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndDeleteLesion('4.9_2.jpg', 4, 1, 4);
  });

  it("8. save draft - 1 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndSaveDraft('4.9_2.jpg', 1, 1, 2);
  });

  it("9. save draft - 2 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndSaveDraft('4.9_2.jpg', 2, 1, 2);
  });

  it("10. save draft - 3 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndSaveDraft('4.9_2.jpg', 3, 1, 3);
  });

  it("11. save draft- 4 lesions 4.9Mb x 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

   //Add multiple
   dashboardActions.addMuiltiPathologyRequestLargeImagesAndSaveDraft('4.9_2.jpg', 4, 1, 4);
  });

  it.only("12. saveDraft by API- 1 lesions 4.9Mb x 3 images", () => 
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

   //Add multiple
   dashboardActions.saveDraftMuiltiMultilLesionsLargeImages('4.9_2.jpg', 1, 1, 2);
  });

  it.only("13. saveDraft by API - 2 lesions 4.9Mb x 3 images", () => 
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

   //Add multiple
   dashboardActions.saveDraftMuiltiMultilLesionsLargeImages('4.9_2.jpg', 2, 1, 2);
  });

  it.only("14. saveDraft by API - 3 lesions 4.9Mb x 3 images", () => 
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

   //Add multiple
   dashboardActions.saveDraftMuiltiMultilLesionsLargeImages('4.9_2.jpg', 3, 1, 3);
  });

  it.only("15. saveDraft by API- 4 lesions 4.9Mb x 3 images", () => 
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
   //Add multiple
   dashboardActions.saveDraftMuiltiMultilLesionsLargeImages('4.9_2.jpg', 4, 1, 4);
  });
});
  