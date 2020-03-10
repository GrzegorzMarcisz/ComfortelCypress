export default class CRM_CUSTOMER_SERVICE_OFFICES {

    verify() {
        cy.get('h1').contains('Biura obsługi klienta').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}