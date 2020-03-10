export default class TEL_NUMBERS {

    verify() {
        cy.get('h1').contains('Numery telefonów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}