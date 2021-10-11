import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Large image testing", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();

  it("1.Large images 2 lesions + 2 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel-${homeActions.randomAlpha(10)}`;
    const lastname = `two lesions-two large images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(2);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(2)

    // //Add another lesion
    // dashboardActions.addAnotherLesion()
    // dashboardActions.addALesionLargeImages(2)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("2.Large images 3 lesions + 1 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `three lesions-one large images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(1)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(1)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("3.Large images 4 lesions + 1 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `three lesions-one large images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(1);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(1)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(1)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(1)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("4.Large images 1 lesions + combine 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `one lesions-one combine images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionCombineImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("5.Large images 2 lesions + combine 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `two lesions-one combine images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionCombineImages();
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("6.Large images 3 lesions + combine 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `three lesions-one combine images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionCombineImages();
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });
 
  it("7.Large images 4 lesions + combine 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel ${homeActions.randomAlpha(20)}`;
    const lastname = `four lesions-one combine images`;
  dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionCombineImages();
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()
    
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionCombineImages()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });

  it("8.Large images 3 lesions + 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel-${homeActions.randomAlpha(10)}`;
    const lastname = `three lesions-four large images`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });

  it("9.Large images 4 lesions + 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `parallel-${homeActions.randomAlpha(10)}`;
    const lastname = `four lesions-four large images`;
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    // dashboardActions.isUploadSuccesfully(0);
  });

});
  