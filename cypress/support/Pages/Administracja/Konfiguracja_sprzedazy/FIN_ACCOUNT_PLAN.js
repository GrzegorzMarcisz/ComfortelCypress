export default class FIN_ACCOUNT_PLAN {

    verify() {
        cy.get('h1').contains('Konta księgowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}