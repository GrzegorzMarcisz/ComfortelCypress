//  Sebastian Blaszczykiewicz
//  Comfortel / QA
//  since 12-2019


import BOK_HOME_PAGE from '../../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../../support/Pages/NAVIGATION';
import CAT_SERVICES from '../../../support/Pages/Administracja/Katalog_produktow/CAT_SERVICES';
import CAT_PRODUCTS from '../../../support/Pages/Administracja/Katalog_produktow/CAT_PRODUCTS';

describe("Testy Produktów w katalogu produktów", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const catServicePage = new CAT_SERVICES;
    const catProductsPage = new CAT_PRODUCTS;

    beforeEach(() => {
        cy.login();

    })

    it.skip("Tworzenie produktu z usługi z wybraną nazwą", () => {

        catProductsPage.createProduct('Soczek');
        //catServicePage.removeService('TestProduktu')
    })

    it.skip("Tworzenie produktu z usługi z określoną nazwą", () => {

        catProductsPage.createProduct();
    })

    it.skip("Usuwanie produktu z określoną nazwą", () => {
        catProductsPage.createProduct();
        catProductsPage.removeProduct();
    })

    it("Tworzenie produktu z usługi z określoną nazwą", () => {
        catProductsPage.createProductTest();
    })

    it("Usuwanie produktu z określoną nazwą", () => {
        catProductsPage.removeProductTest();
    })

    it("Edycja produktu", () => {
        catProductsPage.editProduct();
    })

    it.skip("Katalog produktów - widok szczegółów produktu", () => {
        bokHomePage.verify();
        cy.visit('?PRODUCT_ID=10&VIEW=CAT_PRODUCT_DETAILS')

    })
})