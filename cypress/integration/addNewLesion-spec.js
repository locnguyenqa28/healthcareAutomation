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
      dashboardActions.enterFirstName(user.firstname);
      dashboardActions.enterLastName(user.lastname);
      dashboardActions.selectGenderF();
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

      //Case Images
      dashboardActions.addBodyMap();
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();

      //Upload Dermascopic Images
      dashboardActions.uploadImage();
      dashboardActions.startUpload();
      dashboardActions.isImageUploadedSuccessfully();
      dashboardActions.nextButtonUploadImg();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.submitCasePrint();
      dashboardActions.returnToDashboard();
      homeActions.isDashboardDisplayed();
    });
  });
  