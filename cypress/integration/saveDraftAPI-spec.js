import user from "../support/constants";
// import user from "../support/request-dashboard";


describe("Save Draft by API", () => {
  it("saveDraft by API is successfull", () => 
  {
    cy.saveDraft();
  });
});