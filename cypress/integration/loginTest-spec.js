
import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import user from "../support/constants"


describe("Test Login Function", () => {
  const loginActions = new LoginActions();
  const homeActions = new HomeActions();

  it("User should login successful", () => {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
  });

});
