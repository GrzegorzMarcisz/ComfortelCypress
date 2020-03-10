export default class CRM_ORDER_RESERVATIONS {

    verify() {
        cy.verify('Rezerwacje zasobów');
        cy.get('.datagrid-table').should('be.visible');
    } 

}