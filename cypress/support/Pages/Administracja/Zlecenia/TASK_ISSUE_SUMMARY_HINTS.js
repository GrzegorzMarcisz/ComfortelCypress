export default class TASK_ISSUE_SUMMARY_HINTS {

    verify() {
        cy.get('h1').contains('Cele zlecenia').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}