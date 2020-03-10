export default class RES_SUPPLY_NUMDEFS {

    verify() {
        cy.get('h1').contains('Numeracje dostaw').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}