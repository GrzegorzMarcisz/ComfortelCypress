export default class REP_REPORTS {

    verify() {
        cy.verify('Raporty');
        cy.get('.datagrid-table').should('be.visible');
    } 

}