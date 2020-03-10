export default class BIL_BILLING_CYCLE_DEFINITIONS {

    verify() {
        cy.get('h1').contains('Definicje cykli billingowych').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}