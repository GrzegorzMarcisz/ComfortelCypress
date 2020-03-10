import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import RES_SUPPLIES from '../../support/Pages/Dział techniczny/RES_SUPPLIES'
import RES_RESOURCE_LOCATIONS from '../../support/Pages/Dział techniczny/RES_RESOURCE_LOCATIONS'


describe("Smoke testy: Dział Techniczny", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const resSuppliesPage = new RES_SUPPLIES;
    const resResourceLocationsPage = new RES_RESOURCE_LOCATIONS;
    


    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Zarządzanie urządzeniami", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Techniczny');
        navigationPage.sideMenuParent('Zarządzanie urządzeniami', 'Dostawy urządzeń');
        resSuppliesPage.verify();
        navigationPage.sideMenuChild('Urządzenia');
        resResourceLocationsPage.verify();
    })

    it.only("Smoke: Lista sprzetu w magazynach i u klientów", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Techniczny');
        navigationPage.sideMenuParent('Zarządzanie urządzeniami', 'Urządzenia');
        cy.pause();
        resResourceLocationsPage.verify()
        cy.pause();
        resResourceLocationsPage.verifyAllResourceList();
        cy.pause();
        resResourceLocationsPage.verifyResourceDetailPage();
    })

})