export default class CRM_RODO_CONSENTS {

    verify() {
        cy.verify('Statusy klientów');
        cy.get('.datagrid-table').should('be.visible');
    } 

}