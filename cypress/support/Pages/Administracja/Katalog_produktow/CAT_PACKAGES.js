export default class CAT_PACKAGES {

    verify() {
        cy.get('h1').contains('Pakiety').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}