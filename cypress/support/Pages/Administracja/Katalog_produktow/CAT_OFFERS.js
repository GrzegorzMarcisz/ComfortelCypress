export default class CAT_OFFERS {

    verify() {
        cy.get('h1').contains('Oferty').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}