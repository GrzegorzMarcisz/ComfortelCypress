export default class CRM_ORDERS_PHYSICAL_RESOURCES_EXCHANGE {

    verify() {
        cy.verify('Zamówienia wymiany urządzeń');
        cy.get('.datagrid-table').should('be.visible');
    } 

}