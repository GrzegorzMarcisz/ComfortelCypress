export default class CRM_ORDERS_NEW_CUSTOMER_BUSINESS {

    verify() {
        cy.verify('Zamówienia nowego klienta biznesowego');
        cy.get('.datagrid-table').should('be.visible');
    } 

}