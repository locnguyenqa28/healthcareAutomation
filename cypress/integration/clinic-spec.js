import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import { ClinicActions } from "../pages/clinicActions";
import user from "../support/constants"


describe("Clinic", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
    const clinicActions = new ClinicActions();

  it("1. Create a clinic", () => 
  {
    const clinicName = `Automation-${homeActions.randomAlpha(10)}`;
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
    clinicActions.enterClinicNumber();
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
  });

  it("2. Edit a clinic name", () => 
  {
    const clinicName = `Automation-${homeActions.randomAlpha(10)}`;
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
   
    dashboardActions.selectClinicOptionByName();
    dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup');

    // Clinic modal
    clinicActions.assertText('Add new clinic');
    clinicActions.clickLastEditClinicButton();
    clinicActions.isModal('Edit a clinic');
    clinicActions.enterClinicEditName(clinicName);
    clinicActions.clickSaveEditClinic();

    // Assert clinic
    clinicActions.isClinicTable();
    clinicActions.isClinicName(clinicName); 
  });

  it("3. Create a clinic then Delete it", () => 
  {
    const clinicName = `Automation-${homeActions.randomAlpha(10)}`;
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
    clinicActions.enterClinicNumber();
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
  
    //Delete last Clinic
    clinicActions.assertText('Add new clinic');
    clinicActions.clickLastDeleteClinicButton();

    // Assert clinic not exist
    clinicActions.isClinicTable();
    clinicActions.isClinicNameNotExist(clinicName); 
  });

  it("4. Create multi clinic", () => {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Clinic
    // dashboardActions.selectClinicOptionByName();
    // dashboardActions.clickOkSelectClinic();
    dashboardActions.clickHrefByText('Setup', true);
    clinicActions.createMultiClinic(2);
  })

  it("5. Unable to create a clinic with the invalid email", () => {
    const clinicName = `Automation-${homeActions.randomAlpha(10)}`;
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
    clinicActions.enterClinicNumber();
    clinicActions.enterClinicAddress();
    clinicActions.enterClinicSubhub();
    clinicActions.enterClinicPostcode();
    clinicActions.selectClinicLab();
    clinicActions.selectClinicState();
    clinicActions.enterClinicPhone();
    clinicActions.enterClinicMobilePhone();

    //Invalid email 
    clinicActions.enterClinicEmail('a');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('@');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('a@');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('@a');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('@a.a');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('a@.a');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('@.');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 

    //Invalid email 
    clinicActions.enterClinicEmail('a.a');
    clinicActions.clickSaveClinic();

    // Assert clinic
    clinicActions.isClinicNameNotVisible(clinicName); 
  })

  it("6. Valid check all input fields", () => 
  {
    const clinicName = `Automation-${homeActions.randomAlpha(10)}`;
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
    clinicActions.clickSaveClinic();
    // Assert message
    clinicActions.assertPlaceholder('Please enter a clinic name.');
    clinicActions.assertPlaceholder('Please enter a provider number. Allowed characters:A-Z,0-9.');
    clinicActions.assertPlaceholder('Please enter a clinic number. Allowed characters:A-Z,0-9.');
    clinicActions.assertPlaceholder('Please enter an address.');
    clinicActions.assertPlaceholder('Please enter a suburb.');
    clinicActions.assertPlaceholder('Please enter a post code.');
    clinicActions.assertPlaceholder('Invalid email format.');
    clinicActions.assertPlaceholder('Please enter a phone.');
    clinicActions.assertPlaceholder('Please enter a phone.');

    clinicActions.enterClinicName(clinicName);
    clinicActions.enterClinicProvidernumber();
    clinicActions.enterClinicNumber();
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
  });
});
  