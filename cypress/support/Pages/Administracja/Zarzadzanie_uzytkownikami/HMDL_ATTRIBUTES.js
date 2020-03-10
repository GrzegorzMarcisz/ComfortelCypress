export default class HMDL_ATTRIBUTES {

    verify() {
        cy.get('h1').contains('Atrybuty').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}