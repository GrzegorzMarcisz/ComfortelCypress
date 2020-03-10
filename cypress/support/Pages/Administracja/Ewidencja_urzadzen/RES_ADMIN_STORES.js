export default class RES_ADMIN_STORES {

    verify() {
        cy.get('h1').contains('Magazyny').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 
    
}