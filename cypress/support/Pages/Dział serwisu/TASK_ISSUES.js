export default class TASK_ISSUES {

    verify() {
        cy.verify('Zlecenia');
        cy.get('.datagrid-table').should('be.visible');
    }

}