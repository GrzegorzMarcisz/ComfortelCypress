export default class TASK_ISSUE_PRIORITIES {

    verify() {
        cy.get('h1').contains('Priorytety zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}