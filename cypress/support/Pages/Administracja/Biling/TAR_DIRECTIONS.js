export default class TAR_DIRECTIONS {
    
    verify() {
        cy.get('h1').contains('Kierunki').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}