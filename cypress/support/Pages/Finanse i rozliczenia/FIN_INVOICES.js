export default class FIN_INVOICES {

    verify() {
        cy.verify('Lista dokumentów sprzedażowych');
        cy.get('.datagrid-table').should('be.visible');
    } 

}