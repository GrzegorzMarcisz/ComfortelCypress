import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import TASK_SCHEDULE_CARD_MONTH_LAYOUT from '../../support/Pages/Dział serwisu/TASK_SCHEDULE_CARD_MONTH_LAYOUT';
import TASK_ISSUES from '../../support/Pages/Dział serwisu/TASK_ISSUES';
import TASK_SCHEDULE_CARD_MONTH_TIMETABLE from '../../support/Pages/Dział serwisu/TASK_SCHEDULE_CARD_MONTH_TIMETABLE';


describe("Smoke testy: Dział Serwisu", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const taskScheduleCardMonthLayoutPage = new TASK_SCHEDULE_CARD_MONTH_LAYOUT;
    const taskScheduleCardMonthTimetablePage = new TASK_SCHEDULE_CARD_MONTH_TIMETABLE;
    const taskIssuesPage = new TASK_ISSUES;
    


    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Harmonogram", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Serwisu');
        navigationPage.sideMenuParent('Harmonogram', 'Konfiguracja');
        taskScheduleCardMonthLayoutPage.verify();
        navigationPage.sideMenuChild('Planowanie');
        taskScheduleCardMonthTimetablePage.verify();
    })

    it("Smoke: Obsługa zleceń", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Serwisu');
        navigationPage.sideMenuParent('Obsługa zleceń', 'Lista zleceń');
        taskIssuesPage.verify();
    })

})