export default class DIC_CANCELLATION_REASONS {

    verify() {
        cy.get('h1').contains('Powody rezygnacji').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}