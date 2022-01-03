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
});
  