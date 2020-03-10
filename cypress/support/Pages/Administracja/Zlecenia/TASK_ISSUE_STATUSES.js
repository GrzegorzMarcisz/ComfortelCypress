export default class TASK_ISSUE_STATUSES {

    verify() {
        cy.get('h1').contains('Statusy zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}