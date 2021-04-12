import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"

describe("Add New Lesion on eDerm", function () {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
  
    it("User should be able to add New Lesion", function () 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle();
      dashboardActions.enterFirstName();
      dashboardActions.enterLastName();
      dashboardActions.selectGenderF();
      dashboardActions.enterDOB();
      dashboardActions.enterHomeAdd();
      dashboardActions.enterCity();
      dashboardActions.selectState();
      dashboardActions.enterPostcode();
      dashboardActions.enterContact();
      dashboardActions.enterMedicare();
      dashboardActions.nextButton();

      //Clinical Condition
      dashboardActions.noPreviousHistory();

      //Case Images
      dashboardActions.addBodyMap();
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();

      //Upload Dermascopic Images
      cy.fixture('ederm.png').then((file) => {
        cy.request({
          url: 'C:\Users\markdennist\Pictures',
          method: 'put',
          body: file,
        });
      });

    });
  });
  