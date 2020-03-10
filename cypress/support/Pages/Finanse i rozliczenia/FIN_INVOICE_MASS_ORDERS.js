export default class FIN_INVOICE_MASS_ORDERS {

    verify() {
        cy.verify('Procesy fakturowania masowego');
        cy.get('.datagrid-table').should('be.visible');
    } 

}