export default class TASK_ISSUE_TYPES {

    verify() {
        cy.get('h1').contains('Typy zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 
}