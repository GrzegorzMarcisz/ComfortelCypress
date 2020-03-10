import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import S2E_EVENTS from '../../support/Pages/Stan systemu/S2E_EVENTS';
import S2E_RTRM_EVENTS from '../../support/Pages/Stan systemu/S2E_RTRM_EVENTS';
import SYSTEM_BACKEND_COUNTERS from '../../support/Pages/Stan systemu/SYSTEM_BACKEND_COUNTERS';

describe("Smoke testy: Stan systemu", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const s2eEventsPage = new S2E_EVENTS;
    const s2eRtmEventsPage = new S2E_RTRM_EVENTS;
    const systemBackendCounters = new SYSTEM_BACKEND_COUNTERS;


    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Lista zdarzeń", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Stan systemu');
        navigationPage.sideMenuParent('Zdarzenia', 'Lista zdarzeń');
        s2eEventsPage.verify();
        navigationPage.sideMenuChild('Lista zdarzeń RTRM');
        s2eRtmEventsPage.verify();
    })

    it("Smoke: Statystyki", () => {
        
        bokHomePage.verify();
        navigationPage.toogleTopMenu('Stan systemu');
        navigationPage.sideMenuParentOnly('Statystyki');
        systemBackendCounters.verify();
    })

})