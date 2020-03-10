export default class HMDL_USERS {

    verify() {
        cy.get('h1').contains('Użytkownicy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}