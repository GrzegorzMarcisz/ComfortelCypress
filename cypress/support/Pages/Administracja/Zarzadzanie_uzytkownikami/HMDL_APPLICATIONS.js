export default class HMDL_APPLICATIONS {

    verify() {
        cy.get('h1').contains('Aplikacje klienckie').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}