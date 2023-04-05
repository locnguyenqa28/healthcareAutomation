const setupRoutes = () => {
    cy.log('( •_•) Setting up routes for XHR requests')
      .intercept('POST', '/cases/getcasesxml?*').as('POST_getCaseXml')
      .intercept('POST', '/cases/saveimage?casetempID=*').as('POST_saveImage')
  }
  
  export default setupRoutes
