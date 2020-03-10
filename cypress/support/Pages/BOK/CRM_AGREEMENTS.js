export default class CRM_AGREEMENTS {

    verify() {
        cy.verify('Lista umów');
        cy.get('.datagrid-table').should('be.visible');
    } 

}