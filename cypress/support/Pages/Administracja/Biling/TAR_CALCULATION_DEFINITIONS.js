export default class TAR_CALCULATION_DEFINITIONS {

    verify() {
        cy.get('h1').contains('Sposoby obliczania kosztów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}