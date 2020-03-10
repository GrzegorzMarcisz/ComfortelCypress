export default class DIC_CONSENTS {

    verify() {
        cy.get('h1').contains('Oświadczenia').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}