export default class REP_DEFINITIONS {

    verify() {
        cy.get('h1').contains('Definicje raportów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}