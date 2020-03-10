export default class RES_MODELS {

    verify() {
        cy.get('h1').contains('Modele urządzeń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}