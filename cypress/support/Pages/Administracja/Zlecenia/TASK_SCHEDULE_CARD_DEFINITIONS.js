export default class TASK_SCHEDULE_CARD_DEFINITIONS {

    verify() {
        cy.get('h1').contains('Definicje kart').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}