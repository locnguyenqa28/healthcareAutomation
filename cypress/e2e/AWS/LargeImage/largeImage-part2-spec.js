import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";


describe("Large image testing - AWS", () => {
  user.username = user.username1
  user.password = user.password1
  const homeActions = new HomeActions();
  const loginActions = new LoginActions();
  const dashboardActions = new DashboardActions();
  const clinicActions = new ClinicActions();
      
  before('De-Active Signle account login',() => {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.wait(3000);
    dashboardActions.activeSingleAccountLogin(0);
  });

  it("16. Combinine Large images & invalid image - 1 lesions 4.9Mb x 3 images - 1", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiLesionLargeAndInvalidImages('4.9_2.jpg', 1, 1, 1);
  });

  it("17. Combinine Large images & invalid image - 2 lesions 4.9Mb x 3 images - 2", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiLesionLargeAndInvalidImages('4.9_2.jpg', 2, 1, 2);
  });

  it("18. Combinine Large images & invalid image - 3 lesions 4.9Mb x 3 images - 3", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiLesionLargeAndInvalidImages('4.9_2.jpg', 3, 1, 3);
  });

  it("19. Combinine Large images & invalid image - 4 lesions 4.9Mb x 3 images - 4", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();

    //Add multiple
    dashboardActions.addMuiltiLesionLargeAndInvalidImages('4.9_2.jpg', 4, 1, 4);
  });

  it("20. Combinine Large images - 1 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("21. Combinine Large images - 2 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("22. Combinine Large images - 3 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("23. Combinine Large images - 4 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("24. Combinine Large images - 5 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("25. Combinine Large images - 6 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("26. Combinine Large images - 7 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("27. Combinine Large images - 8 lesions - added and deleted image- No json error", () => 
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
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("28. Combinine Large images - 9 lesions - added and deleted image- No json error", () => 
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

   dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 9)

  //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });

  it("29. Combinine Large images - 10 lesions - added and deleted image- No json error", () => 
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

   dashboardActions.addMuiltiLesionLargeThenDeleteImages(imageName, 9)

  //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft'); 
  });
});
  