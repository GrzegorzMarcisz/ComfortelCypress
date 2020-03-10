export default class TASK_SCHEDULE_CARD_MONTH_TIMETABLE {

    verify() {
        cy.verify('Planowanie harmonogramu techników');
        cy.get('button').contains('Drukuj dzień').should('be.visible');
    }

}