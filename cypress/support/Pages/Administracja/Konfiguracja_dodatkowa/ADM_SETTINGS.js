export default class ADM_SETTINGS {

    verify() {
        cy.get('h1').contains('Ustawienia systemowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}