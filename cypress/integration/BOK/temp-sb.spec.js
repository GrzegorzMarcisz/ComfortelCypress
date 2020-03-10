import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import CUSTOMER_LIST from '../../support/Pages/BOK/CUSTOMERS_LIST';


describe("Testy liczby klientów na podstawie podsumowania filtrowanej listy klientów", () => {

    
    // ================================== Zmienne w celu personalizacji testu ======================================
    // Wprowadź aktualną liczbę klientów obecną w systemie
    // customerListPage.checkCustomerQuantity(liczba klientów indywidualnych, liczba klientów biznesowych);

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const customerListPage = new CUSTOMER_LIST;

    beforeEach( () => {
        cy.login();
    })


    it("Pobieranie liczby klientów z listy", () => {
   
        bokHomePage.verify();

        navigationPage.toogleTopMenu("BOK");
        navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
        customerListPage.verify();
        
        this.filterRadio("Typ klienta",typKlienta);
        this.filterBtnFilter();
        cy.wait(1000);
        var wierszyKlientow;
        cy.get('.c-pagination-info').contains(/\d{1,3}//g/).as('wierszyKlientow');
        // cy.get('.c-pagination-info').invoke('text').then((txt1)=>{
        // cy.get('.c-pagination-info').contains(txt1).should('contains.text','wierszy');
        // // wyciagam do zmiennej ilosc wierszy
        //     var fullText = txt1;
        //     var pattern1 = /\d{1,3} wierszy/g;
        //     var wyciete1 = fullText.match(pattern1);
        //         var wyciete2 = wyciete1.toString();
        //         var pattern2 = /\d{1,3}/g;
        //         var wierszyKlientow = wyciete2.match(pattern2);                   
        cy.log(wierszyKlientow == 0 ? "UWAGA! Zero klientów" : "OK. Lista zawiera klientów");
    })
})
