import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Save Draft", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const validDVANumber = 'Abc12345678'
    it("01. Patient Details saving", () => 
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
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("02. One Lesion saving", () => 
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
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("03. Two Lesion saving", () => 
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
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("04. Three Lesion saving", () => 
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
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("05. Four Lesion saving", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `save four lesion ${homeActions.randomAlpha(10)}`;
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
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();
  
      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
    
    it("06. Check all body regions", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
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
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.selectAndAssertEditedRegion();
    });
    
    it("07. Check all ProvisionalDiagnosis", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
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
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.selectAndAssertEditedProvisionalDiagnosis(firstname);
    });
    
    it("08. Check all Billing", () => 
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
      dashboardActions.addALesionMoreThan4Images(1);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.assertSelectedBilling(user.billing.bulkBill)
      // dashboardActions.assertMedicare(user.medicare)
      dashboardActions.selectBilling(user.billing.DVA)
      dashboardActions.enterDVANumber(validDVANumber);
      dashboardActions.saveDraft();
      dashboardActions.assertTitleTop('Dashboard');
      dashboardActions.assertFirstName(firstname);
      dashboardActions.isReviewCase('Draft');
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      
      dashboardActions.assertSelectedBilling(user.billing.DVA);
      // dashboardActions.assertDVANumber(validDVANumber)
      dashboardActions.selectBilling(user.billing.bulkBill);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.clickHrefByText('Save update');
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertSelectedBilling(user.billing.bulkBill)
      // dashboardActions.assertMedicare(user.medicare)

      dashboardActions.selectBilling(user.billing.private)
      dashboardActions.checkPrivate();
      dashboardActions.clickHrefByText('Save update');
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertSelectedBilling(user.billing.private);
      dashboardActions.isPrivateChecked();
    });
    
    it("09. Check all Gender", () => 
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
      dashboardActions.addALesionMoreThan4Images(1);

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
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertGender(user.gender.other)

      dashboardActions.selectGender(user.gender.unknown)
      dashboardActions.clickHrefByText('Save update');
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFirstName(firstname);
      dashboardActions.assertGender(user.gender.unknown);
    });
    
    it("10. Save one lesion - 4 images - 4 copies", () => 
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
  
      dashboardActions.selectTitleCopy3ByIndex(3)
      dashboardActions.enterFirstNameCopy3('Copy C')
      dashboardActions.enterLastNameCopy3('last name C')
      dashboardActions.enterSuburbCopy3('suburb C')
  
      dashboardActions.selectTitleCopy4ByIndex(3)
      dashboardActions.enterFirstNameCopy4('Copy D')
      dashboardActions.enterLastNameCopy4('last name D')
      dashboardActions.enterSuburbCopy4('suburb D')

      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesionMoreThan4Images(1);

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.isReviewCase('Draft')
    
    });
  });
  