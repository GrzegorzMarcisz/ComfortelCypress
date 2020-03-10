export default class BIL_PAYMENTS_AND_CHARGES {

    verify() {
        cy.get('h1').contains('Płatności i naliczanie').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}