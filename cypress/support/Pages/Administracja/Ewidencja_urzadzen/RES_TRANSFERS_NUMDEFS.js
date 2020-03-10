export default class RES_TRANSFERS_NUMDEFS {

    verify() {
        cy.get('h1').contains('Numeracje przemagazynowań').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}