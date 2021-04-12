import { CommonActions } from "./commonAction";

export class HomeActions extends CommonActions{
  isDashBoardButtonDisplayed() {
    cy.get('a[href="/cases/dashboard?backdashboard=1"]')
    .should('be.visible')
  }
}
