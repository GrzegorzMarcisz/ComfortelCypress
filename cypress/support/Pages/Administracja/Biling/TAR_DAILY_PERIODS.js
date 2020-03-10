export default class TAR_DAILY_PERIODS {

    verify() {
        cy.get('h1').contains('Okresy dobowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}