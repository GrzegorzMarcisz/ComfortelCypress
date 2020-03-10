export default class RES_CATEGORIES {

    verify() {
        cy.get('h1').contains('Kategorie urządzeń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}