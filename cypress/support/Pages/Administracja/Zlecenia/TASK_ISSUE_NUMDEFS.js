export default class TASK_ISSUE_NUMDEFS {

    verify() {
        cy.get('h1').contains('Numeracje zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}