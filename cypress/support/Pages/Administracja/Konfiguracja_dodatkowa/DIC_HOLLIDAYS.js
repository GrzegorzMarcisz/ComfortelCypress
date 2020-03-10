export default class DIC_HOLLIDAYS {

    verify() {
        cy.get('h1').contains('Święta').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}