export default class ADM_NUMERATOR_DEFS {

    verify() {
        cy.get('h1').contains('Numeratory').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
        cy.get('.spinner').should('not.exist').wait(2000);
        cy.get('.alert-items').should('not.exist').wait(5000);
    
    }
}