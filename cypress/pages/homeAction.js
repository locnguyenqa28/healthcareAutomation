import { CommonActions } from "./commonAction";

export class HomeActions extends CommonActions{
  isDashBoardButtonDisplayed() {
    cy.get('a[href="/cases/dashboard?backdashboard=1"]')
    .should('be.visible')
  }

  isDashboardDisplayed(){
    cy.get('img[src="/images/header-dashboard.png"]')
    .should('be.visible')
  }

  randomAlphanumeric(length) {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }

  randomAlpha(length) {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }
}
