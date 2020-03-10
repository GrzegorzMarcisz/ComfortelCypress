import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import CUSTOMERS_LIST from '../../support/Pages/BOK/CUSTOMERS_LIST';
import CRM_AGREEMENTS from '../../support/Pages/BOK/CRM_AGREEMENTS';
import PURCHASE_ORDER_TYPE_HALL from '../../support/Pages/BOK/PURCHASE_ORDER_TYPE_HALL';
import CRM_ORDER_MODIFICATION_HALL from '../../support/Pages/BOK/CRM_ORDER_MODIFICATION_HALL';
import CRM_ORDER_RESERVATIONS from '../../support/Pages/BOK/CRM_ORDER_RESERVATIONS';
import CRM_RODO_CONSENTS from '../../support/Pages/BOK/CRM_RODO_CONSENTS';
import CRM_RODO_TOKENS from '../../support/Pages/BOK/CRM_RODO_TOKENS';
import CRM_RODO_LOG from '../../support/Pages/BOK/CRM_RODO_LOG';
import CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL from '../../support/Pages/BOK/Procesowane_zamowienia/CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL';
import CRM_ORDERS_NEW_CUSTOMER_BUSINESS from '../../support/Pages/BOK/CRM_ORDERS_NEW_CUSTOMER_BUSINESS';
import CRM_ORDERS_CONTRACT_CANCELLATION from '../../support/Pages/BOK/CRM_ORDERS_CONTRACT_CANCELLATION';
import CRM_ORDERS_PHYSICAL_RESOURCES_RETURN from '../../support/Pages/BOK/CRM_ORDERS_PHYSICAL_RESOURCES_RETURN';
import CRM_ORDERS_PHYSICAL_RESOURCES_EXCHANGE from '../../support/Pages/BOK/CRM_ORDERS_PHYSICAL_RESOURCES_EXCHANGE';

describe("Smoke testy: BOK", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const customerListPage = new CUSTOMERS_LIST;
    const crmAgreementsPage = new CRM_AGREEMENTS;
    const purchaseOrderTypeHallPage = new PURCHASE_ORDER_TYPE_HALL;
    const crmOrderModificationHallPage = new CRM_ORDER_MODIFICATION_HALL;
    const crmOrdersNewCustomerIndividualPage = new CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL;
    const crmOrdersNewCustomerBusinessPage = new CRM_ORDERS_NEW_CUSTOMER_BUSINESS;
    const crmOrdersContractCancellationPage = new CRM_ORDERS_CONTRACT_CANCELLATION;
    const crmOrdersContractPhysicalResourcesReturnPage = new CRM_ORDERS_PHYSICAL_RESOURCES_RETURN;
    const crmOrdersContractPhysicalResourcesExchamgePage = new CRM_ORDERS_PHYSICAL_RESOURCES_EXCHANGE;
    const crmOrderReservationPage = new CRM_ORDER_RESERVATIONS;
    const crmRodoConsentsPage = new CRM_RODO_CONSENTS;
    const crmRodoTokensPage = new CRM_RODO_TOKENS;
    const crmRodoLogPage = new CRM_RODO_LOG;

    beforeEach( () => {
        cy.login();
    })

    it("Smoke: Ewidencja klienta", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Ewidencja klienta', 'Lista klientów');
        customerListPage.verify();
        navigationPage.sideMenuChild('Lista umów');
        crmAgreementsPage.verify();
    })

    it("Smoke: Obsługa klienta", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        navigationPage.sideMenuChild('Zmiana stanu umowy');
        crmOrderModificationHallPage.verify();
    })

    it("Smoke: Procesowanie zamówienia", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Procesowane zamówienia','Nowy klient indywidualny'); 
        crmOrdersNewCustomerIndividualPage.verify();
        navigationPage.sideMenuChild('Nowy klient biznesowy');
        crmOrdersNewCustomerBusinessPage.verify();
        navigationPage.sideMenuChild('Rozwiązanie umowy');      
        crmOrdersContractCancellationPage.verify();
        navigationPage.sideMenuChild('Zwrot urządzeń');      
        crmOrdersContractPhysicalResourcesReturnPage.verify();
        navigationPage.sideMenuChild('Wymiana urządzeń');             
        crmOrdersContractPhysicalResourcesExchamgePage.verify();
        navigationPage.sideMenuChild('Lista rezerwacji zasobów');             
        crmOrderReservationPage.verify();
    })    

    it("Smoke: Ochrona danych osobowych", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Ochrona danych osobowych','Statusy klientów');
        crmRodoConsentsPage.verify();
        navigationPage.sideMenuChild('Klienci zanonimizowani');
        crmRodoTokensPage.verify();
        navigationPage.sideMenuChild('Historia');
        crmRodoLogPage.verify();
        
    })        

})