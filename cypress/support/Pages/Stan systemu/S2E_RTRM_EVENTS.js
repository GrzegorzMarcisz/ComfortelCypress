export default  class S2E_RTRM_EVENTS {

    verify() {
        cy.verify('Zdarzenia');
        cy.get('.datagrid-table').should('be.visible');
    } 

}