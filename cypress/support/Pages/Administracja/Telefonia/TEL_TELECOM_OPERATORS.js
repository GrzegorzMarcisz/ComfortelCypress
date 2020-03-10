export default class TEL_TELECOM_OPERATORS {

    verify() {
        cy.get('h1').contains('Operatorzy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}