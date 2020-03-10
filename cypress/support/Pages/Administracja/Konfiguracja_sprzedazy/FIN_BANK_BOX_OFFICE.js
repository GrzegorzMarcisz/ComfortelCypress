export default class FIN_BANK_BOX_OFFICE {

    verify() {
        cy.get('h1').contains('Konta bankowe i kasy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}