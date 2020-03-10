export default class TAR_NUMBERING_ZONES {

    verify() {
        cy.get('h1').contains('Strefy numeracyjne').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}