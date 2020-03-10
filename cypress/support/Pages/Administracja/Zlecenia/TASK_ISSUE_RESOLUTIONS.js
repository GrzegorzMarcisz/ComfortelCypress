export default class TASK_ISSUE_RESOLUTIONS {

    verify() {
        cy.get('h1').contains('Rozwiązania zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}