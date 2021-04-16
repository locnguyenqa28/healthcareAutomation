export class CommonActions {
  visitPage() {
    cy.visit('');
  }

  uploadImage(){
    cy.get('input[type="file"]')
      .attachFile('ederm.png')
}

}
