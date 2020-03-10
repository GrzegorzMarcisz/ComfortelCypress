//  Sebastian Blaszczykiewicz
//  Comfortel / QA
//  since 12-2019


import BOK_HOME_PAGE from '../../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../../support/Pages/NAVIGATION';
import CAT_SERVICES from '../../../support/Pages/Administracja/Katalog_produktow/CAT_SERVICES';

describe("Testy Usług w katalogu produktów", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const catServicePage = new CAT_SERVICES;

    beforeEach(() => {
        cy.login();

    })

    it("Smoke: Katalog produktów - widok szczegółów usługi", () => {
        cy.wait(1000);
        const catServicePage = new CAT_SERVICES;
        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        catServicePage.verify();
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        //cy.visit('?SERVICE_ID=1&VIEW=V_CAT_SERVICE_DETAILS')
        catServicePage.verifyServiceAttrDetails();
        catServicePage.verifyServicePageButtons();
    })

    it.skip("Usun usluge jesli juz istnieje", () => {
        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        catServicePage.verify();
        catServicePage.checkServiceExist();
    });


    it.skip("Katalog produktów - dodawanie usługi z wybraną nazwą", () => {

        const catServicePage = new CAT_SERVICES;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        catServicePage.verify();
        catServicePage.addService();
    });

    it.skip("Katalog produktów - usuwanie usługi z wybraną nazwą", () => {
        catServicePage.removeService();
    });

    
    it("Katalog produktów - tworzenie usługi z wybraną nazwą", () => {
        catServicePage.addServiceTest();
    });

    it("Katalog produktów - usuwanie predefiniownej usługi", () => {
        catServicePage.removeServiceTest();
    });

})
