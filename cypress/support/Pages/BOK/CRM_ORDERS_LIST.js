export default class CRM_ORDERS_LIST {

    verify() {
        cy.verify('Lista zamówień');
        cy.get('.datagrid-table').should('be.visible');
    } 

}