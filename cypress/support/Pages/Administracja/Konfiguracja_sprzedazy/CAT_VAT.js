export default class CAT_VAT {

    verify() {
        cy.get('h1').contains('Stawki VAT').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}