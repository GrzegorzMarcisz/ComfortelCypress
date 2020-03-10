export default class FIN_INVOICE_MASS_PRINTS {

    verify() {
        cy.verify('Procesy drukowania masowego');
        cy.get('.datagrid-table').should('be.visible');
    } 

}