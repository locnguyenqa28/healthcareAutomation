import { LoginActions } from "../../pages/loginAction";
import { HomeActions } from "../../pages/homeAction";
import { DashboardActions } from "../../pages/dashboardActions";
import user from "../../support/constants"


describe("Validation fields checking", () => {
    user.username = user.username1
    user.password = user.password1
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const validDVANumber = 'Abc12345678';
    const invalidSymbol = "%"

  it("Validation- Patient details fields ", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(20)}`;
    const lastname = `${homeActions.randomAlpha(20)}`;

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickAddNewLesion();

    dashboardActions.nextButton();
    dashboardActions.verifyListErrorPatientsDetailsVisible();
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
    dashboardActions.backButton();
    dashboardActions.verifyListErrorPatientsDetailsNotVisible()


    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("Validation- Copy Report fields ", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(20)}`;
    const lastname = `${homeActions.randomAlpha(20)}`;
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

    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1(invalidSymbol)
    dashboardActions.enterLastNameCopy1(invalidSymbol)
    dashboardActions.enterSuburbCopy1(invalidSymbol)

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2(invalidSymbol)
    dashboardActions.enterLastNameCopy2(invalidSymbol)
    dashboardActions.enterSuburbCopy2(invalidSymbol)
   
    dashboardActions.enterFirstNameCopy3(invalidSymbol)
    dashboardActions.enterLastNameCopy3(invalidSymbol)
    dashboardActions.enterSuburbCopy3(invalidSymbol)

    dashboardActions.nextButton();

    dashboardActions.verifyListErrorCopyFieldsVisible();

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

    dashboardActions.nextButton();

    dashboardActions.backButton();

    dashboardActions.verifyListErrorCopyFieldsNotVisible();

    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("Validation - Clinical condition", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `Clinical ${homeActions.randomAlpha(5)}`;
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    const validNote = "abcdzABCDZ()--/#,1234567890.";
    const invalidNote = "!@@@@@@@$$$$$";
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();
    dashboardActions.enterClinicalNote(invalidNote);
    dashboardActions.addBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterClinicalNote(validNote);
    
    dashboardActions.backButton();

    dashboardActions.verifyListErrorCopyFieldsNotVisible();

    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("Validation - Body map - Upload image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
    const validText = "abcdzABCDZ()--";
    const validDVANumber = "abcdzABCDZ()--/#,1234567890";
    const validNote = "abcdzABCDZ()--/#,1234567890.";
    const invalidNote = "!@@@@@@@$$$$$";
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();
    dashboardActions.enterClinicalNote(invalidNote);
    dashboardActions.addBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterClinicalNote(validNote);
    
    //Body map
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation(invalidNote);
    dashboardActions.saveBodyMap();
    dashboardActions.assertText(user.validNoteMessage);
    dashboardActions.enterSpecimenLocation(validNote);
    dashboardActions.saveBodyMap();

     //Upload Dermascopic Images
     dashboardActions.assertHeader('Upload ');
     dashboardActions.uploadImage();
     dashboardActions.startUpload();
     dashboardActions.isImageUploadedSuccessfully();
     dashboardActions.assertFile('1.jpg')
     dashboardActions.nextButtonUploadImg();

      //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });

  it("Validation - Submit 1 lesion with limited images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Validation - Submit 2 lesions with limited images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Validation - Submit 3 lesions with limited images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("Validation - Submit 4 lesions with limited images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `validation ${homeActions.randomAlpha(5)}`;
    const lastname = `${homeActions.randomAlpha(10)}`;
   
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

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

    dashboardActions.addAndValidateLesionLimitedImage(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addAndValidateLesionLimitedImage(5)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
 
});
  