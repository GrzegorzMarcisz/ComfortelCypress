import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import CASH_REGISTER from '../../support/Pages/Finanse i rozliczenia/CASH_REGISTER';
import FIN_BANK_ACCOUNT_STATEMENTS from '../../support/Pages/Finanse i rozliczenia/FIN_BANK_ACCOUNT_STATEMENTS';
import FIN_BOX_OFFICE from '../../support/Pages/Finanse i rozliczenia/FIN_BOX_OFFICE';
import FIN_INVOICES from '../../support/Pages/Finanse i rozliczenia/FIN_INVOICES';
import FIN_INVOICE_MASS_ORDERS from '../../support/Pages/Finanse i rozliczenia/FIN_INVOICE_MASS_ORDERS';
import FIN_INVOICE_MASS_PRINTS from '../../support/Pages/Finanse i rozliczenia/FIN_INVOICE_MASS_PRINTS';

describe("Smoke testy: Finanse i Rozliczenia", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const cashRegisterPage = new CASH_REGISTER;
    const finBankAccountStatementsPage = new FIN_BANK_ACCOUNT_STATEMENTS;
    const finBoxofficePage = new FIN_BOX_OFFICE;
    const finInvoicesPage = new FIN_INVOICES;
    const finInvoiceMassOrdersPage = new FIN_INVOICE_MASS_ORDERS;
    const finInvoiceMassPrintsPage = new FIN_INVOICE_MASS_PRINTS;


    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Punkty kasowe", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Finanse i Rozliczenia');
        navigationPage.sideMenuParent('Punkty kasowe', 'Wybór punktu kasowego');
        cashRegisterPage.verify();
        navigationPage.sideMenuChild('Raporty z punktów kasowych');
        finBoxofficePage.verify();
    })

    it("Smoke: Wyciągi bankowe", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Finanse i Rozliczenia');
        navigationPage.sideMenuParent('Wyciągi bankowe', 'Dodanie i rozksięgowanie wyciągu');
        finBankAccountStatementsPage.verify();
    })

    it("Smoke: Dokumenty sprzedażowe", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Finanse i Rozliczenia');
        navigationPage.sideMenuParent('Dokumenty sprzedażowe', 'Lista dokumentów sprzedażowych');
        finInvoicesPage.verify();
        navigationPage.sideMenuChild('Procesy fakturowania masowego');
        finInvoiceMassOrdersPage.verify();
        navigationPage.sideMenuChild('Procesy drukowania masowego');
        finInvoiceMassPrintsPage.verify();
    })

})