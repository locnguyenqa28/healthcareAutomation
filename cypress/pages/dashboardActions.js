import { CommonActions } from "./commonAction";

export class DashboardActions extends CommonActions
{
  clickAddNewLesion(){
      cy.get('a[href="/cases?urgent=1"]')
        .contains('Submit New Lesion').click()
  }

  selectTitle(){
      cy.get('select[id="temptitle"]')
        .select('Mrs')
  }
  
  enterFirstName(){
      cy.get('input[id="case_FirstName"]')
        .type('Quality')
  }

  enterLastName(){
      cy.get('input[id="case_LastName"]')
        .type('Tester One')
  }

  selectGenderM(){
      cy.get('input[value="m"]')
        .click()
  }

  selectGenderF(){
      cy.get('input[value="f"]')
        .click()
  }

  enterDOB(){
      cy.get('input[id="case_DOB"]')
        .type('15042000')
  }

  enterHomeAdd(){
      cy.get('input[id="case_Address"]')
        .type('Pine Street')
  }

  enterCity(){
      cy.get('input[id="case_suburb"]')
        .type('Angeles')
  }

  selectState(){
      cy.get('select[id="case_patientstate"]')
        .select('NSW')
  }

  enterPostcode(){
      cy.get('input[id="case_PostCode"]')
        .type('2525')
  }

  enterContact(){
      cy.get('input[id="case_NotificationPhone"]')
        .type('5507891')
  }

  enterMedicare(){
      cy.get('input[id="case_NHS"]')
        .type('0000052545')
  }

  saveDraft(){
      cy.get('a[class="docnavright2"]')
        .contains('Save draft » ').click()
  }
  nextButton(){
      cy.get('a[class="docnavright"]')
        .contains('Next »').click()
  }

  //Clinical Condition
  addBodyMap(){
    cy.get('a[id="goodlink"]')
      .click()
  }

  noPreviousHistory(){
      cy.get('input[id="important_1"]')
        .click()
  }

  clickImage(){
    cy.get('img[id="showimaged"]')
      .click()
  }
  clickRIghtHand(){
      cy.get('div[style="top: 389px; left: 534px;"]')
        .click()
  }

  selectBodyRegion(){
      cy.get('select[id="BodyMapRegion"]')
      .eq(0)
      .select('Hand', {force: true})
  }

  enterSpecimenLocation(){
      cy.get('textarea[id="specimenLocation"]')
        .type('Test Location')
  }

  saveBodyMap(){
      cy.get('button[id="uploadbodylayoutupdate"]')
        .click()
  }

  //Upload Dermascopic Images
  uploadImage(){
      cy.get('input[type="file"]')
        .attachFile('ederm.png')
  }
  startUpload(){
    cy.get('[type="submit"]')
      .click()
  }
}
