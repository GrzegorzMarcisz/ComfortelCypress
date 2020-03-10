export default class TASK_SCHEDULE_CARD_MONTH_LAYOUT {

    verify() {
        cy.verify('Konfiguracja harmonogramu techników');
        cy.get('button').contains('Kopiuj karty').should('be.visible');
    }

}