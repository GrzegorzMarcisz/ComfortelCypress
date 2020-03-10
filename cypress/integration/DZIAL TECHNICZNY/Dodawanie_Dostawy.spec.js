import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import RES_SUPPLIES from '../../support/Pages/Dział techniczny/RES_SUPPLIES'
import RES_RESOURCE_LOCATIONS from '../../support/Pages/Dział techniczny/RES_RESOURCE_LOCATIONS'


describe("Dział techniczny - Testy dostaw", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const resSuppliesPage = new RES_SUPPLIES;
    const resResourceLocationsPage = new RES_RESOURCE_LOCATIONS;
    


    beforeEach( () => {
        cy.login();
    })

    it("Dodawanie dostawy z unikatową nazwą", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Techniczny');
        navigationPage.sideMenuParent('Zarządzanie urządzeniami', 'Dostawy urządzeń');
        resSuppliesPage.verify();
        resSuppliesPage.addSupply('Dostawa Test '+resSuppliesPage.generateNumber(),'Maniax','11.12.2019','FVZ/12/2019-OK','dostawa autotest');
    })

    it("Dodawanie dostawy z nieunikatową nazwą (niedozwolone)", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Techniczny');
        navigationPage.sideMenuParent('Zarządzanie urządzeniami', 'Dostawy urządzeń');
        resSuppliesPage.verify();
        resSuppliesPage.addSupplyExistingName('Dostawa Test 33','Satlan','11.12.2019','FVZ/12/2019-NOTOK','niepoprawna nazwa');  
    })

    it("Dodawanie dostawy bez wypełniania pól (niedozwolone)", () => {
        bokHomePage.verify();
        navigationPage.toogleTopMenu('Dział Techniczny');
        navigationPage.sideMenuParent('Zarządzanie urządzeniami', 'Dostawy urządzeń');
        resSuppliesPage.verify();
        resSuppliesPage.addSupplyWithoutFill();
    })
})