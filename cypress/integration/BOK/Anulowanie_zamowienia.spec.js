//  ||================================||
//  || ** QA Department **            ||
//  || S.Błaszczykiewicz              ||
//  || since 10/2019                  ||
//  ||================================||

//   1. [B3S-Zamówienia] Skrypt automatyzujący testy procesu anulowania umowy dla nowego klienta indywidualnego
//   2. [B3S-Zamówienia] Skrypt automatyzujący testy procesu anulowania umowy dla nowego klienta biznesowego - w planach 11/2019
//   3. [B3S-Zamówienia] Skrypt automatyzujący testy procesu anulowania umowy dla istniejącego klienta indywidualnego - w planach 11/2019
//   4. [B3S-Zamówienia] Skrypt automatyzujący testy procesu anulowania umowy dla istniejącego klienta biznesowego - w planach 11/2019



import NEW_CUSTOMER_INDIVIDUAL from '../../support/Pages/BOK/Procesowane_zamowienia/CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL';
import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import PURCHASE_ORDER_TYPE_HALL from '../../support/Pages/BOK/PURCHASE_ORDER_TYPE_HALL';
import NEW_IND_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/NEW_IND_ORDER_HALL';
import CSO_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CSO_ROOM_NEW_IND';
import ADDRESS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/ADDRESS_ROOM_NEW_IND';
import OFFERS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/OFFERS_ROOM_NEW_IND';
import CRM_ISSUE_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_ISSUE_DATA_ROOM_NEW_IND';
import CONSENTS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CONSENTS_ROOM_NEW_IND';
import CLIENT_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CLIENT_DATA_ROOM_NEW_IND';
import CONTRACT_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CONTRACT_DATA_ROOM_NEW_IND';
import SUMMARY_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/SUMMARY_ROOM_NEW_IND';
import CRM_AGREEMENT_DETAILS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_AGREEMENT_DETAILS';
import CUSTOMER_DETAILS from '../../support/Pages/BOK/Ewidencja klienta/CUSTOMER_DETAILS';
import CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND';
import CRM_LOGICAL_RESOURCES_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_LOGICAL_RESOURCES_ROOM_NEW_IND';


describe('Anulowanie zamówienia dla nowego klienta indywidualnego i biznesowego', function() {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const purchaseOrderTypeHallPage = new PURCHASE_ORDER_TYPE_HALL;
    const newIndOrderHallPage = new NEW_IND_ORDER_HALL;
    const csoRoomNewIndPage = new CSO_ROOM_NEW_IND;
    const addressRoomNewIndPage = new ADDRESS_ROOM_NEW_IND;
    const offersRoomNewIndPage = new OFFERS_ROOM_NEW_IND;
    const crmIssueDataRoomNewIndPage = new CRM_ISSUE_DATA_ROOM_NEW_IND;
    const consentRoomNewIndPage = new CONSENTS_ROOM_NEW_IND;
    const clientDataRoomNewIndPage = new CLIENT_DATA_ROOM_NEW_IND;
    const contractDataRoomNewIndPage = new CONTRACT_DATA_ROOM_NEW_IND;
    const summaryRoomNewIndPage = new SUMMARY_ROOM_NEW_IND;
    const crmAgreementDetailsPage = new CRM_AGREEMENT_DETAILS;
    const customerDetailsPage = new CUSTOMER_DETAILS;
    const processedIndOrdersPage = new NEW_CUSTOMER_INDIVIDUAL;
    const crmPhysicalRecourcesRoomInd = new CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND;
    const crmLogicalResourcesRoomInd = new CRM_LOGICAL_RESOURCES_ROOM_NEW_IND;
    

    beforeEach( () => {
        cy.login();

    })

    it('Anulowanie niewypełnionego zamówienia dla nowego klienta indywidualnego', function() {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient indywidualny');
        cy.wait(1000);
        processedIndOrdersPage.cancelIndOrderAndCheck();
 
    });


    it('Anulowanie wypełnionego zamówienia dla nowego klienta indywidualnego', function() {

        cy.routeListener('PUT', '/api/suo/execute/CRM_ORDER_INITIALIZE_INDIVIDUAL', 'uid');
        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient indywidualny');

        cy.wait('@uid');

        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Adres instalacji');
        addressRoomNewIndPage.verify();
        addressRoomNewIndPage.addressSearch('Goetla');
        addressRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // Pokoj oswiadczen klienta
        newIndOrderHallPage.room('Oświadczenia')
        consentRoomNewIndPage.verify();
        consentRoomNewIndPage.sposobPozyskania('Telefoniczny');
        consentRoomNewIndPage.checkConsent('CONSENT__AK_MARKETINGOWE');
        consentRoomNewIndPage.checkConsent('CONSENT__DANE_OSOBOWE');
        consentRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // Oferty - dodawanie przez API
        purchaseOrderTypeHallPage.newOrder('Oferty');
        offersRoomNewIndPage.verify();
        offersRoomNewIndPage.addOffer('@uid');
        offersRoomNewIndPage.end();
        // Dodawanie urzadzen
        newIndOrderHallPage.room('Urządzenia');
        crmPhysicalRecourcesRoomInd.verify();
        crmPhysicalRecourcesRoomInd.addDevice();
        // Dodawanie zasobow logicznych
        newIndOrderHallPage.room('Zasoby logiczne');
        crmLogicalResourcesRoomInd.verify();
        crmLogicalResourcesRoomInd.addPhoneNumber();
        // Dane klienta
        newIndOrderHallPage.room('Dane klienta');
        clientDataRoomNewIndPage.verify();
        clientDataRoomNewIndPage.profilSprzedazy('Domyślny profil sprzedaży');
        clientDataRoomNewIndPage.forename('Anula');
        clientDataRoomNewIndPage.surname('Anulująca '+ customerDetailsPage.generateNumber());
        clientDataRoomNewIndPage.pesel('51100584251');
        clientDataRoomNewIndPage.email('s.blaszczykiewicz@comfortel.pl');
        clientDataRoomNewIndPage.telefon('+33000555999')
        clientDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // Dane umowy
        newIndOrderHallPage.room('Dane umowy');
        contractDataRoomNewIndPage.verify();
        contractDataRoomNewIndPage.docType('Dowód osobisty');
        contractDataRoomNewIndPage.docNumber('SBX 123 456');
        contractDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // anulowanie wypełnionego zamówienia
       processedIndOrdersPage.cancelIndOrderAndCheck();
        
    })


    it('Anulowanie niewypełnionego zamówienia dla nowego klienta biznesowego', function() {
        cy.wait(1000);
        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient biznesowy');
        cy.wait(1000);
        processedIndOrdersPage.cancelBusinessOrderAndCheck();
 
    });



});