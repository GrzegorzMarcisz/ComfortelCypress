export default class CRM_RODO_TOKENS {

    verify() {
        cy.verify('Klienci zanonimizowani');
        cy.get('.datagrid-table').should('be.visible');
    } 

}