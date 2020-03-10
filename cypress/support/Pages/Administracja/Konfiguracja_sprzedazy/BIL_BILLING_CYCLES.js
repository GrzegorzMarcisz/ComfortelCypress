export default class BIL_BILLING_CYCLES {

    verify() {
        cy.get('h1').contains('Cykle bilingowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}