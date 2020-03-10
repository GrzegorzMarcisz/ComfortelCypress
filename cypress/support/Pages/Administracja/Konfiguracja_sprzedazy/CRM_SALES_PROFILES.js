export default class CRM_SALES_PROFILES {

    verify() {
        cy.get('h1').contains('Profile sprzedaży').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}