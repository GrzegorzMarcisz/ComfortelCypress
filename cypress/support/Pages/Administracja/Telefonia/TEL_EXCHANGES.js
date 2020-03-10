export default class TEL_EXCHANGES {

    verify() {
        cy.get('h1').contains('Centrale').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}