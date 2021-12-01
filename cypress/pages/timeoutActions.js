import { CommonActions } from "./commonAction";
import user from "../support/constants";

export class TimeoutActions extends CommonActions{
    assertClinicalIndication(isNoPreviousHistology = true, provisionalDiagnosis = 'BCC (Basal Cell Carcinoma)', 
    excludeMelanoma = true, 
    excludeNMSC = true, 
    biopsyType = 'O (Other)',
    surgicalManagement = null,
    dermoscopyPerformed = true,
    note = 'testing'
    ) {
        if(isNoPreviousHistology) {
            cy.get('input#important_1').should('be.checked');
            cy.get('select#ProvisionalDiagnosis [selected="selected"]')
            .should('have.text', provisionalDiagnosis);
            if(excludeMelanoma){
                cy.get(`input#ExcludeMelanoma_1`).should('be.checked');
            }else{
                cy.get(`input#ExcludeMelanoma_0`).should('be.checked');
            }
            
            if(excludeNMSC){
                cy.get(`input#ExcludeNMSC_1`).should('be.checked');
            }else{
                cy.get(`input#ExcludeNMSC_0`).should('be.checked');
            }

            if(dermoscopyPerformed){
                cy.get(`input#DermoscopyPerformed_1`).should('be.checked');
            }else{
                cy.get(`input#DermoscopyPerformed_0`).should('be.checked');
            }

            cy.get('textarea[id*="important"]').should('have.text', note);
        } else {
            cy.get('input#important_0').should('be.checked');
        }

        if(biopsyType !== null){
            cy.get('select#BiopsyType [selected="selected"]')
            .should('have.text', biopsyType)
        } else {
            cy.get('select#BiopsyType [selected="selected"]')
            .should('not.visible')
        }
        if(surgicalManagement !== null){
            cy.get('select#SurgicalManagement [selected="selected"]')
            .should('have.text', surgicalManagement)
        } else {
            cy.get('select#SurgicalManagement [selected="selected"]')
            .should('not.visible')
        }

    }

    assertTimeOutModalVisible(){
        cy.get('div#sessiontime').should('be.visible')
        cy.get('input#password_extend').should('be.visible')
        cy.get('[onclick="checkloignsession();"]').should('be.visible')
        cy.get('[onclick="logoggofextend()"]').should('be.visible')
    }

    clickLogOffInTimeout(){
        cy.get('[onclick="logoggofextend()"]').click();
    }
}