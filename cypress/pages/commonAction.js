export class CommonActions {
  visitPage() {
    cy.visit('');
  }

  uploadImage(){
    cy.get('input[type="file"]')
      .attachFile('1.jpg')
}

}
