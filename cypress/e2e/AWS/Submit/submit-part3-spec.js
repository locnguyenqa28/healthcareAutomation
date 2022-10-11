import { LoginActions } from "../../../pages/loginAction";
import { HomeActions } from "../../../pages/homeAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { ClinicActions } from "../../../pages/clinicActions";
import user from "../../../support/constants"


describe("Submit - AWS - part3", () => {
    user.username = user.username1
    user.password = user.password1
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const clinicActions = new ClinicActions();
    const validDVANumber = 'Abc12345678';
        
    before('De-Active Signle account login',() => {
      loginActions.visitPage();
      loginActions.inputUserName(user.adminUser);
      loginActions.inputPassword(user.adminPassword);
      loginActions.clickLoginButton();
      cy.wait(3000);
      dashboardActions.activeSingleAccountLogin(0);
    });

    it("1. submit Large images - 1 lesions - added and deleted image - No error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
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
     dashboardActions.addBodyMap();
    //Case bodymap
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();
  
    //Upload Dermascopic Images
      dashboardActions.assertHeader('Upload ');
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      cy.wait(2000);
      dashboardActions.startUpload();
      cy.wait(2000);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.clickDeleteImage(1);
      dashboardActions.waitForDeleteButtonVisible(2, 30);
  
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.nextButtonUploadImg(90000, true);
  
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
    });
  
    it("2. Submit Large images - 2 lesions - added and deleted image - No error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
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
     dashboardActions.addBodyMap();
    //Case bodymap
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();
  
    //Upload Dermascopic Images
      dashboardActions.assertHeader('Upload ');
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      cy.wait(2000);
      dashboardActions.startUpload();
      cy.wait(2000);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.clickDeleteImage(1);
      dashboardActions.waitForDeleteButtonVisible(2, 30);
  
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.nextButtonUploadImg(90000, true);
  
      dashboardActions.addAnotherLesion();
  
        
     //Clinical Condition
     dashboardActions.noPreviousHistory();
     dashboardActions.provisionalDiagnosis();
     dashboardActions.excludeMelasma();
     dashboardActions.excludeNmsc();
     dashboardActions.selectBiopsyType();
     dashboardActions.addBodyMap();
    //Case bodymap
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();
  
    //Upload Dermascopic Images
      dashboardActions.assertHeader('Upload ');
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      cy.wait(2000);
      dashboardActions.startUpload();
      cy.wait(2000);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.clickDeleteImage(1);
      dashboardActions.waitForDeleteButtonVisible(2, 30);
  
      dashboardActions.uploadMultiImagesV2(imageName, 3);
      dashboardActions.assertHeader('Upload ');
      dashboardActions.assertText('Remove');
      cy.wait(2000);
      dashboardActions.startUpload();
      dashboardActions.waitForDeleteButtonVisible(3, 30);
      dashboardActions.isProgressBarDisappear(90000);
      dashboardActions.isImageUploadedSuccessfully(90000);
  
      dashboardActions.nextButtonUploadImg(90000, true);
  
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });

    it("3. Submit Large images - 3 lesions - added and deleted image- No error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 3)
  
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
  
    it("4. submit Large images - 4 lesions - added and deleted image- No json error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 4)
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
  
    it("5. submit Large images - 5 lesions - added and deleted image- No json error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 5)
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
  
    it("6. submit Large images - 6 lesions - added and deleted image- No json error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 6)
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
  
    it("7. submit Large images - 7 lesions - added and deleted image- No json error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 7)
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
  
    it("8. submit Large images - 8 lesions - added and deleted image- No json error", () => 
    {
      const imageName = '4.9_2.jpg';
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
  
     //Add New Lesion - Patient Details
     const firstname = `large-${homeActions.randomAlpha(10)}`;
     const lastname = `${homeActions.randomAlpha(5)}`;
     dashboardActions.selectClinicOptionByName();
     dashboardActions.clickOkSelectClinic();
     dashboardActions.clickAddNewLesion();
     dashboardActions.selectTitle('Mrs');
     dashboardActions.enterFirstName(firstname);
     dashboardActions.enterLastName(lastname);
     dashboardActions.selectGender('Male');
     dashboardActions.enterDOB(user.DOB);
     dashboardActions.enterHomeAdd(user.address);
     dashboardActions.enterCity(user.city);
     dashboardActions.selectState();
     dashboardActions.enterPostcode(user.postcode);
     dashboardActions.enterContact(user.contact);
     dashboardActions.enterMedicare(user.medicare);
     dashboardActions.nextButton();
  
     dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 8)
   //Case Summary
   dashboardActions.caseSummary();
   dashboardActions.submitCasePrint();
   dashboardActions.returnToDashboard();
   homeActions.isDashboardDisplayed();
   dashboardActions.isUploadSuccesfully(0);
    });
});
  