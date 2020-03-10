export default class DIC_BILLING_UNITS {

    verify() {
        cy.get('h1').contains('Jednostki miary').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}