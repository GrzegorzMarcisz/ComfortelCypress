export default class CAT_PROMOTIONS {

    verify() {
        cy.get('h1').contains('Promocje').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}