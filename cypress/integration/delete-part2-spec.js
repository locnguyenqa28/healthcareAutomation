import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Delete lesion on eDerm - part 2", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const lesion1 = 'Lesion 1';

  it("21. Delete one Lesion - 4 images + 2 copies 1st 2nd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `One Lesion - four images -two copies first second`;
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
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy1ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

     dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(4);

      //Case Summary
      dashboardActions.caseSummary();
      
      //Delete lesion
      dashboardActions.assertButton('Dashboard')
      dashboardActions.scrollToLesion(lesion1)
      dashboardActions.assertText(lesion1)
      dashboardActions.clickDeleteLesion(lesion1)
  
      //Case Summary
      dashboardActions.saveDraft();
      dashboardActions.isReviewCase('Draft')
  });
  
  it("22. Delete one Lesion - 4 images + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `One Lesion - four images -three copies`;
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

     dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(4);

    //Case Summary
    dashboardActions.caseSummary();
    
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });

  it("23. Delete two Lesions - 4 images + one report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `two Lesion - four images - one copy`;
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

    dashboardActions.selectTitleCopy1ByIndex()
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')
     dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
      
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });

  it("24. Delete two Lesion - 4 images + 2 copies 1st 2nd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `two Lesion - four images -two copies first second`;
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
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy1ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionByNumberImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(4);

    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)
      
    //Delete lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion(lesion1)
    dashboardActions.assertText(lesion1)
    dashboardActions.clickDeleteLesion(lesion1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("25. Delete 2 Lesion - 4 images + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `two Lesions - four images -three copies`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
   //Add lesion
   dashboardActions.addALesionByNumberImages(4);
    //Add another lesion
    dashboardActions.addAnotherLesion();
   dashboardActions.addALesionByNumberImages(4);

   //Case Summary
   dashboardActions.caseSummary();
     
   //Delete lesion
   dashboardActions.assertButton('Dashboard')
   dashboardActions.scrollToLesion(lesion1)
   dashboardActions.assertText(lesion1)
   dashboardActions.clickDeleteLesion(lesion1)
     
   //Delete lesion
   dashboardActions.assertButton('Dashboard')
   dashboardActions.scrollToLesion(lesion1)
   dashboardActions.assertText(lesion1)
   dashboardActions.clickDeleteLesion(lesion1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("26. Delete 4 Lesion - no image ", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `four lesion no image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
   //Add lesion
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
     
   //Delete lesion
   dashboardActions.deleteLesionByName(lesion1, 4)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("27. Delete 1 Lesion - no image + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `one lesion no image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
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
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("28. Delete 2 Lesions - no image + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(20)}`;
    const lastname = `two Lesions - four images -three copies`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
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
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 2)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("29. Delete 3 Lesions - no image + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `three Lesions no image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
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
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 3)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("30. Delete 4 Lesions - no image + 3 copies 1st 2nd 3rd report", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `four Lesions no image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
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
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 4)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("31. Delete 1 Lesion - invalid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `one Lesion invalid image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
    dashboardActions.addALesionByInvalidImages();
 
    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("32. Delete 1 Lesion - combine images + 2 copies and 1 hospital", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `one Lesion invalid image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
    dashboardActions.addALesionByInvalidImages();
 
    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("33. Delete 2 Lesion - combine images + 2 copies and 1 hospital", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `two Lesions invalid image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
 
    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("34. Delete 3 Lesions - combine images + 2 copies and 1 hospital", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `three Lesions combine image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
    dashboardActions.addALesionByInvalidImages();
        
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
        
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
  it("35. Delete 4 Lesions - combine images + 2 copies and 1 hospital", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `delete-${homeActions.randomAlpha(10)}`;
    const lastname = `four Lesions combine image`;
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

    dashboardActions.assertText('Next »')
    dashboardActions.assertText('Save draft » ')
    dashboardActions.nextButton();
    //Add lesion
    dashboardActions.addALesionByInvalidImages();
        
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
        
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
        
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();
    //Case Summary
    dashboardActions.caseSummary();
      
    //Delete lesion
    dashboardActions.deleteLesionByName(lesion1, 1)

    //Case Summary
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft')
  });
  
});
  