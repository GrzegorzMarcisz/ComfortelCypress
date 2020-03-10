export default class FIN_BOX_OFFICE {

    verify() {
        cy.verify('Raporty kasowe');
        cy.get('.datagrid-table').should('be.visible');
    } 

}