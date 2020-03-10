export default class TAR_TARIFF_GROUPS {

    verify() {
        cy.get('h1').contains('Grupy taryf').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}