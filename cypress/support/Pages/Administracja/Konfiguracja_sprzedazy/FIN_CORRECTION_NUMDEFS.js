export default class FIN_CORRECTION_NUMDEFS {

    verify() {
        cy.get('h1').contains('Numeracje korekt').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}