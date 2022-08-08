import user from "../../../support/constants";
import { LoginActions } from "../../../pages/loginAction";
import { DashboardActions } from "../../../pages/dashboardActions";
import { HomeActions } from "../../../pages/homeAction";
import { ClinicActions } from "../../../pages/clinicActions";

describe("Application Links", () => {
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

  it("Make sure Unable to view or modify the account after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.getUrlLogoutThenVisit();
  });

  it("Make sure Unable to view or modify the admin after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.getUrlLogoutThenVisit();
  });

  it("Make sure Unable to view or modify the clinic after logout", () => 
  {
    const clinicName = `checklinks-${homeActions.randomAlpha(10)}`;
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');
    clinicActions.clickHrefByText('Add new clinic');

    // Clinic modal
    clinicActions.isModal('Add new clinic');
    clinicActions.enterClinicName(clinicName);
    clinicActions.enterClinicProvidernumber();
    clinicActions.enterClinicAddress();
    clinicActions.enterClinicSubhub();
    clinicActions.enterClinicPostcode();
    clinicActions.selectClinicLab();
    clinicActions.selectClinicState();
    clinicActions.enterClinicPhone();
    clinicActions.enterClinicMobilePhone();
    clinicActions.enterClinicEmail();
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.reloadClinicPage();
    clinicActions.isClinicTable();
    clinicActions.isClinicName(clinicName); 
    dashboardActions.getUrlLogoutThenVisit();
  });

  it("Make sure Unable to view or modify the Patient detail after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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
    dashboardActions.saveDraftAndGetUrlLogoutThenVisit(firstname);
  });

  it("Make sure Unable to view or modify at the Clinical Condition - empty after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the Clinical Condition - filled after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the Body map - empty after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the Body map - filled after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Case Images
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the uploadImage - empty after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Case Images
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the uploadImage - 4 images after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Case Images
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(3);
    cy.wait(500);
    dashboardActions.assertText('Remove');
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();

    dashboardActions.getUrlLogoutThenVisit();

  });

  it("Make sure Unable to view or modify at the lesion 1 completed after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Case Images
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertHeader('Upload ');
    dashboardActions.uploadMultiImages(2);
    cy.wait(500);
    dashboardActions.assertText('Remove');
    dashboardActions.startUpload();
    dashboardActions.isProgressBarDisappear();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.nextButtonUploadImg(30000, true);

    dashboardActions.getUrlLogoutThenVisit();

  });
  
  it("Make sure Unable to view or modify at the lesion 2 completed after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Add first lesion
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    dashboardActions.getUrlLogoutThenVisit();

  });
  
  it("Make sure Unable to view or modify at the lesion 3 completed after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Add first lesion
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    dashboardActions.getUrlLogoutThenVisit();

  });
  
  it("Make sure Unable to view or modify at the lesion 4 completed after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `links-${homeActions.randomAlpha(10)}`;
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

    //Add first lesion
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionByNumberImages(3)

    dashboardActions.getUrlLogoutThenVisit();

  });
  
  it("Make sure Unable to view or modify the admin - manage users after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Users')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - manage Cases after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Cases')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - System email after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('System email')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Audit after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Audit')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Trust after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Trust')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Tooltips after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Tooltips')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Case report after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Case report')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Login history after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Login history')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Case history after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Case history')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Audit trail after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Audit trail')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Case settings after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Case settings')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it.skip("Make sure Unable to view or modify the admin - Email matrix after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Email matrix')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Textures after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Textures')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Logs sonic api after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Logs sonic api')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Laboratory after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Laboratory')
    dashboardActions.getUrlLogoutThenVisit();
  });
  
  it("Make sure Unable to view or modify the admin - Images demo after logout", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.adminUser);
    loginActions.inputPassword(user.adminPassword);
    loginActions.clickLoginButton();
    cy.get('#admin').should('be.visible');
    dashboardActions.assertText('Dashboard')
    dashboardActions.clickHrefByText('Images demo')
    dashboardActions.getUrlLogoutThenVisit();
  });

});