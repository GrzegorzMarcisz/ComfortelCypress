export default class ADM_USER_DATA {

    verify() {
        cy.get('h1').contains('Użytkownicy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}