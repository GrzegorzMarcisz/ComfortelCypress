import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import CUSTOMER_LIST from '../../support/Pages/BOK/CUSTOMERS_LIST';


describe("Testy liczby klientów na podstawie podsumowania filtrowanej listy klientów", () => {

    
    // ================================== Zmienne w celu personalizacji testu ======================================
    // Wprowadź aktualną liczbę klientów obecną w systemie
    // customerListPage.checkCustomerQuantity(liczba indywidualnych, liczba biznesowych);

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
        
        customerListPage.getCustomerQuantity();

    })

//cy.stop();


        it("Testy spodziewanej liczby klientów indywidualnych", () => {
   
            bokHomePage.verify();
            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();
            
            customerListPage.checkCustomerQuantity('Indywidualny', 132);

        })

        it("Testy spodziewanej liczby klientów biznesowych", () => {
   
            bokHomePage.verify();
            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();
          
            customerListPage.checkCustomerQuantity('Firma', 14);
            //customerListPage.checkCustomerQuantity('Dowolny',135)

        })

        it("Testy spodziewanej liczby wszystkich klientów", () => {
   
            bokHomePage.verify();
            navigationPage.toogleTopMenu("BOK");
            navigationPage.sideMenuParent("Ewidencja klienta","Lista klientów");
            customerListPage.verify();
          
            customerListPage.checkCustomerQuantity('Dowolny',140)

        })
           
})