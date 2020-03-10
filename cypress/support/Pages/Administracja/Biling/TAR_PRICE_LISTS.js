export default class TAR_PRICE_LISTS {

    verify() {
        cy.get('h1').contains('Cenniki').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}