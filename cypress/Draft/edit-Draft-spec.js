import user from "../support/constants";
import { LoginActions } from "../pages/loginAction";
import { DashboardActions } from "../pages/dashboardActions";
import { HomeActions } from "../pages/homeAction";
import { ClinicActions } from "../pages/clinicActions";

describe("Edit a Draft", () => {
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


  it("Edit a draft successfull", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
    const lastname = `save ${homeActions.randomAlpha(10)}`;
    const editname = `edit-${dashboardActions.randomAlpha(10)}`
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

    homeActions.isDashBoardButtonDisplayed();
    //Case Summary
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.clickEditPatientDetails();
    dashboardActions.enterFirstName(editname);
    dashboardActions.clickSavePatientDetails();
    dashboardActions.clickOkPatientDetails();

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    dashboardActions.assertText(editname);
  });
  
  it("Edit a draft one copy", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });

  it("Edit a draft two copy", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')
  });
  
  it("Edit a draft one copy - 1 lesion", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueExist('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });
  
  it("Edit a draft one copy - 2 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()
    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft');
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });
  
  it("Edit a draft one copy - 3 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft');
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });
  
  it("Edit a draft one copy - 4 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();
    dashboardActions.isReviewCase('Draft');
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')
  });

  it("Edit a draft two copy - 1 lesion", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')
  });

  it("Edit a draft two copy - 2 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')
  });

  it("Edit a draft two copy - 3 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')
  });

  it("Edit a draft two copy - 4 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')
  });

  it("Edit a draft two copy & 1 hospital - 1 lesion", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 2 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()
     
         
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 3 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()        
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 4 lesions", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage()        
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     //Add another lesion
     dashboardActions.addAnotherLesion()
     dashboardActions.addALesionNoImage() 
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });
  
  it("Edit a draft two copy & 1 hospital - 4 lesions - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });
  
  it("Edit a draft two copy & 1 hospital - 3 lesions - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });
  
  it("Edit a draft two copy & 1 hospital - 2 lesions - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });
  
  it("Edit a draft two copy & 1 hospital - 1 lesion - invalid images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionByInvalidImages()    
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 1 lesion- no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    //Add first lesion
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 2 lesions- no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    //Add first lesion
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 3 lesions- no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    //Add first lesion
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 4 lesions- no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    //Add first lesion
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionNoImage()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });

  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 1 lesion- valid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });

  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 2 lesions- valid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });

  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 3 lesions- valid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });

  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 4 lesions- valid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByNumberImages(1);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 1 lesion- invalid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByInvalidImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 2 lesions- invalid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 3 lesions- invalid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });
  
  it("Make sure user can not edit a submit - 2 copies- 1 hospital - 4 lesions- invalid image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit${homeActions.randomAlpha(10)}`;
    const lastname = `submit${homeActions.randomAlpha(5)}`;
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

    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    dashboardActions.addAnotherLesion();
    dashboardActions.addALesionByInvalidImages();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);

    dashboardActions.clickReviewCaseByFirstName(firstname);

    dashboardActions.assertElementNotExist('#editpatientdetails');
    dashboardActions.assertTextIsNotExist('Edit body map and location');
    dashboardActions.assertTextIsNotExist('Add Images');
    dashboardActions.assertTextIsNotExist('Save update');
    dashboardActions.assertTextIsNotVisible('Add another lesion');
    dashboardActions.assertTextIsNotExist('Submit lesion & print');
  });

  it("Edit a draft two copy & 1 hospital - 4 lesions - no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 3 lesions - no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 2 lesions - no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage()
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 1 lesion - no image", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addAnotherLesion();
     dashboardActions.addALesionNoImage();
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 4 lesions - combined images type", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addMoreValidateLesionCombineImages(4, 5, 2);
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 3 lesions - combined images type", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addMoreValidateLesionCombineImages(3, 5, 2);
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 2 lesions - combined images type", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addMoreValidateLesionCombineImages(2, 5, 2);
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

  it("Edit a draft two copy & 1 hospital - 1 lesions - combined images type", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `edit-${homeActions.randomAlpha(10)}`;
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

    homeActions.isDashBoardButtonDisplayed();

    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');
    
    dashboardActions.assertText(firstname);
    dashboardActions.assertText('Create New Pathology Request');

    dashboardActions.clickPathologyRequestByFirstName(firstname);

    // Copies report
    dashboardActions.selectTitleCopy1ByIndex(1)
    dashboardActions.enterFirstNameCopy1('Copy A')
    dashboardActions.enterLastNameCopy1('last name A')
    dashboardActions.enterSuburbCopy1('suburb A')

    dashboardActions.selectTitleCopy2ByIndex(2)
    dashboardActions.enterFirstNameCopy2('Copy B')
    dashboardActions.enterLastNameCopy2('last name B')
    dashboardActions.enterSuburbCopy2('suburb B')

    dashboardActions.clickSaveUpdateForBeta();
    loginActions.visitPageAndLogin(user.username, user.password)
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.clickOkSelectClinic(true);
    clinicActions.selectSearchClinicByText('All');

    dashboardActions.clickPathologyRequestByFirstName(firstname);
    dashboardActions.assertValueVisible('Copy A')
    dashboardActions.assertValueVisible('last name A')
    dashboardActions.assertValueVisible('suburb A')

    dashboardActions.assertValueVisible('Copy B')
    dashboardActions.assertValueVisible('last name B')
    dashboardActions.assertValueVisible('suburb B')

    dashboardActions.enterFirstNameCopy3('Hospital')
    dashboardActions.enterLastNameCopy3('Ward ')
    dashboardActions.enterSuburbCopy3('suburb C')

    
     //Add another lesion
     dashboardActions.addMoreValidateLesionCombineImages(1, 5, 2);
     
    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.saveDraft();

    dashboardActions.isReviewCase('Draft');

     loginActions.visitPageAndLogin(user.username, user.password)
     homeActions.isDashBoardButtonDisplayed();
     dashboardActions.clickOkSelectClinic(true);
     clinicActions.selectSearchClinicByText('All');
 
     dashboardActions.clickPathologyRequestByFirstName(firstname);
     dashboardActions.assertValueVisible('Copy A')
     dashboardActions.assertValueVisible('last name A')
     dashboardActions.assertValueVisible('suburb A')
 
     dashboardActions.assertValueVisible('Copy B')
     dashboardActions.assertValueVisible('last name B')
     dashboardActions.assertValueVisible('suburb B')

     dashboardActions.assertValueVisible('Hospital')
     dashboardActions.assertValueVisible('Ward ')
     dashboardActions.assertValueVisible('suburb C')
 
  });

});