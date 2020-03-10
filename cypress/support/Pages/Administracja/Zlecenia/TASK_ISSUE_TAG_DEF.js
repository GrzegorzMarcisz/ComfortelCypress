export default class TASK_ISSUE_TAG_DEF {

    verify() {
        cy.get('h1').contains('Etykiety zleceń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}