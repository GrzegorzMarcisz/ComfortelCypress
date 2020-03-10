import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import REP_REPORTS from '../../support/Pages/Raporty/REP_REPORTS';



describe("Smoke testy: Raporty", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const raportyPage = new REP_REPORTS;


    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Raporty", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Raporty');
        navigationPage.sideMenuParent('Raporty', 'Lista raportów');
        raportyPage.verify();
    })

})