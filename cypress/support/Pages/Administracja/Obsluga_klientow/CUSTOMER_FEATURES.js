export default class CUSTOMER_FEATURES {

    verify() {
        cy.get('h1').contains('Etykiety').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}