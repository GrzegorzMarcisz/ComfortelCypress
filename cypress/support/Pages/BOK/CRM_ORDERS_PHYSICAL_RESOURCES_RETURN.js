export default class CRM_ORDERS_PHYSICAL_RESOURCES_RETURN {

    verify() {
        cy.verify('Zamówienia zwrotu urządzeń');
        cy.get('.datagrid-table').should('be.visible');
    } 

}