export default class TEL_PHONE_NUMBER_TAG_DEF {

    verify() {
        cy.get('h1').contains('Etykiety numerów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}