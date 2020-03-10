export default class TAR_PREFIXES {

    verify() {
        cy.get('h1').contains('Prefiksy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}