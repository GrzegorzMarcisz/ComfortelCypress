export default class RES_SUPPLIERS {

    verify() {
        cy.get('h1').contains('Dostawcy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}