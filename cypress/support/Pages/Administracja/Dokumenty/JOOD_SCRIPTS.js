export default class JOOD_SCRIPTS {

    verify() {
        cy.get('h1').contains('Konfiguracja dokumentów ODT').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}