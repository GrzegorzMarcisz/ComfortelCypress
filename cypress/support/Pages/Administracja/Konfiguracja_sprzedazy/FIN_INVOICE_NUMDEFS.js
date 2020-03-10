export default class FIN_INVOICE_NUMDEFS {

    verify() {
        cy.get('h1').contains('Numeracje faktur').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}