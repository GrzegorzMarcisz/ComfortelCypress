export default class CRM_RODO_LOG {

    verify() {
        cy.verify('Historia ochrony danych osobowych');
        cy.get('.datagrid-table').should('be.visible');
    } 

}