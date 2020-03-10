// .-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
// |        Sebastian Błaszczykiewicz                                      |
// |        Comfortel Sp. z o.o.                                           |
// |        SB 09/2019                                                     |
// |        Cypress.io - filtrowanie klientów  v.2.1                       |
// `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-sb=-'


import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import CUSTOMER_LIST from '../../support/Pages/BOK/CUSTOMERS_LIST';


describe("Obsługa klienta: Testy filtra klientów", () => {

    
    // ================================== Zmienne w celu personalizacji testu ======================================

    
    // var typKlienta = "Indywidualny";    // ["Dowolny", "Indywidualny", "Firma"]
    // var szukajKlienta = "Duszek";
    // var adresKlienta = "";
    // var peselKlienta = "";
    // var nipKlienta = "";
    // var oczekiwanyKlient = "Duszek"; // nazwa klienta

    // =============================================================================================================

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const customerListPage = new CUSTOMER_LIST;

    beforeEach( () => {
        cy.login();
    })
        it("Testy filtra lista klientów - dowolny, nazwisko", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

          //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch("Dowolny", "Piotr Duszek", "", "", "", "Duszek");
            
        })

        it("Testy filtra lista klientów - indywidualny, nr klienta", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

          //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch("Indywidualny", "194", "", "", "", "Duszek");
            
        })

        it("Testy filtra lista klientów - indywidualny, PESEL", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

          //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch("Indywidualny", "", "Bestwina", "05070130831", "", "Żeligowski");
            
        })

        it("Testy filtra lista klientów - biznesowy, nip", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

            //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch('Firma','','','','5668255808','Ogrodnik');

        })

        it("Testy filtra lista klientów - biznesowy, nr klienta", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

            //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch('Firma','181','','','','Trąbka');

        })
           
        it("Testy filtra lista klientów - dowolny, adres", () => {
   
            bokHomePage.verify();

            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();

            //customerListPage.filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient);
            customerListPage.filterSearch('Dowolny','','Chruszczobród','','','Sickdick Jan');

        })
})