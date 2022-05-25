import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Save Draft", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const validDVANumber = 'Abc12345678';

    it("Patient Details saving", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `save ${homeActions.randomAlpha(10)}`;
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
      dashboardActions.saveDraft();

      dashboardActions.assertFirstName(firstname);
      dashboardActions.isReviewCase('Draft');
    });
  
    it("One Lesion saving", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `save one lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();

      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("Two Lesion saving", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `save two lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesionByNumberImages();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();

      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("Three Lesion saving", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `save three lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesionByNumberImages();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesionByNumberImages();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
    
    it("Check random body regions", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(8)}`;
      const lastname = `Check all body region`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.selectAndAssertEditedRegion();
    });
    
    it.skip("Check random ProvisionalDiagnosis", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(8)}`;
      const lastname = `Check all Provisional Diagnosis`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      
      loginActions.visitPageAndLogin(user.username, user.password);
      homeActions.isDashBoardButtonDisplayed();
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.selectAndAssertEditedProvisionalDiagnosis(firstname);
    });
    
    it("Check all Billing", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `Check all Billing`;
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

      //Add first lesion
      dashboardActions.addALesionByNumberImages(1);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.clickEditPatientDetails();
      dashboardActions.assertSelectedBilling(user.billing.bulkBill)
      dashboardActions.selectBilling(user.billing.DVA)
      dashboardActions.enterDVANumber(validDVANumber);
      dashboardActions.clickSavePatientDetails();
      dashboardActions.clickOkPatientDetails();
      dashboardActions.saveDraft();
      
      dashboardActions.assertTitleTop('Dashboard');
      dashboardActions.assertFirstName(firstname);
      dashboardActions.isReviewCase('Draft');
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      
      dashboardActions.clickEditPatientDetails();
      dashboardActions.assertSelectedBilling(user.billing.DVA);
      dashboardActions.selectBilling(user.billing.bulkBill);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.clickSavePatientDetails();
      dashboardActions.clickOkPatientDetails();
    
      dashboardActions.clickHrefByText('Save update');
      
      loginActions.visitPageAndLogin(user.username, user.password);
      homeActions.isDashBoardButtonDisplayed();
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertSelectedBilling(user.billing.bulkBill)

      dashboardActions.clickEditPatientDetails();
      dashboardActions.selectBilling(user.billing.private)
      dashboardActions.checkPrivate();
      dashboardActions.clickSavePatientDetails();
      dashboardActions.clickOkPatientDetails();
    
      dashboardActions.clickHrefByText('Save update');
      
      loginActions.visitPageAndLogin(user.username, user.password);
      homeActions.isDashBoardButtonDisplayed();
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertSelectedBilling(user.billing.private);
      dashboardActions.isPrivateChecked();
    });
    
    it("Check all Gender", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `Check all gender`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByNumberImages(1);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.assertGender(user.gender.male);
      dashboardActions.selectGender(user.gender.female);
     
      dashboardActions.saveDraft();

      dashboardActions.assertTitleTop('Dashboard');
      dashboardActions.assertFirstName(firstname);
      dashboardActions.isReviewCase('Draft');
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      
      dashboardActions.assertGender(user.gender.female);

      dashboardActions.selectGender(user.gender.other);

      dashboardActions.clickHrefByText('Save update');
      
      loginActions.visitPageAndLogin(user.username, user.password);
      homeActions.isDashBoardButtonDisplayed();
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertGender(user.gender.other)

      dashboardActions.selectGender(user.gender.unknown)

      dashboardActions.clickHrefByText('Save update');
      
      loginActions.visitPageAndLogin(user.username, user.password);
      homeActions.isDashBoardButtonDisplayed();
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();

      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertGender(user.gender.unknown);
    });
    
    it("Save one lesion - 4 images - 2 copies", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `one lesion - four images- four copies`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByNumberImages(1);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();

      dashboardActions.isReviewCase('Draft');
    });
    
    it("Save A Draft - combine image 1 valid, 4 invalid - 2 copies", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `one valid - four invalid`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByInvalidImages(1, 4);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      
      dashboardActions.isReviewCase('Draft');
    });
    
    it("Save A Draft - combine image 2 valid, 4 invalid - 2 copies", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `two valid - four invalid`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByInvalidImages(2, 4);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      
      dashboardActions.isReviewCase('Draft');
    });
    
    it("Save A Draft - combine image 3 valid, 4 invalid - 2 copies", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `three valid - four invalid`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByInvalidImages(3, 4);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();

      dashboardActions.isReviewCase('Draft');
    });
    
    it("Save A Draft - combine image 4 valid, 4 invalid - 2 copies", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `four valid - four invalid`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByInvalidImages(4, 4);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      
      dashboardActions.isReviewCase('Draft');
    });
    
    it("Save A Draft - no valid image", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();

      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `no valid image`;
      dashboardActions.selectClinicOptionByName();
      dashboardActions.clickOkSelectClinic();
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender(user.gender.male);
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);

      // Copies report
      dashboardActions.selectTitleCopy1ByIndex(1)
      dashboardActions.enterFirstNameCopy1('Copy A')
      dashboardActions.enterLastNameCopy1('last name A')
      dashboardActions.enterSuburbCopy1('suburb A')
  
      dashboardActions.selectTitleCopy2ByIndex(2)
      dashboardActions.enterFirstNameCopy2('Copy B')
      dashboardActions.enterLastNameCopy2('last name B')
      dashboardActions.enterSuburbCopy2('suburb B')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionByInvalidImages(0, 4);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.isReviewCase('Draft');
    });
  });
  