export default class CRM_ORDERS_CONTRACT_CANCELLATION {

    verify() {
        cy.verify('Zamówienia rozwiązania umowy');
        cy.get('.datagrid-table').should('be.visible');
    } 

}