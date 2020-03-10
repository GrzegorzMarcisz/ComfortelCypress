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

import CRM_NEW_BUS_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CRM_NEW_BUS_ORDER_HALL';
import ADDRESS_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/ADDRESS_ROOM_NEW_BUS';
import OFFER_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/OFFER_ROOM_NEW_BUS';
import CONSENTS_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CONSENTS_ROOM_NEW_BUS';
import CLIENT_DATA_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CLIENT_DATA_ROOM_NEW_BUS';
import CRM_ASSOCIATES_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CRM_ASSOCIATES_ROOM_NEW_BUS';
import CONTRACT_DATA_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CONTRACT_DATA_ROOM_NEW_BUS';
import SUMMARY_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/SUMMARY_ROOM_NEW_BUS';

describe("Obsługa klienta: Nowa umowa", () => {

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

    const crmNewBusOrderHallPage = new CRM_NEW_BUS_ORDER_HALL;
    const addresssRoomNewBusPage = new ADDRESS_ROOM_NEW_BUS;
    const offerRoomNewBusPage = new OFFER_ROOM_NEW_BUS;
    const consentRoomNewBusPage = new CONSENTS_ROOM_NEW_BUS;
    const clientDataRoomNewBusPage = new CLIENT_DATA_ROOM_NEW_BUS;
    const crmAssociatesRoomNewBusPage = new CRM_ASSOCIATES_ROOM_NEW_BUS;
    const contractDataRoomNewBusPage = new CONTRACT_DATA_ROOM_NEW_BUS;
    const summaryRoomNewBusPage = new SUMMARY_ROOM_NEW_BUS;

    beforeEach( () => {
        cy.login();

    })


    it("Nowa umowa - klient indywidualny", () => {

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
        addressRoomNewIndPage.addressSearch('Katowice');
        addressRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Oferty');
        offersRoomNewIndPage.verify();

        offersRoomNewIndPage.addOffer('@uid');

        offersRoomNewIndPage.end();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Oświadczenia')
        consentRoomNewIndPage.verify();
        consentRoomNewIndPage.sposobPozyskania('Telefoniczny');
        consentRoomNewIndPage.zgodaNaEfakture();
        consentRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane klienta');
        clientDataRoomNewIndPage.verify();
        clientDataRoomNewIndPage.profilSprzedazy('Domyślny profil sprzedaży');
        clientDataRoomNewIndPage.forename('Jan');
        clientDataRoomNewIndPage.surname('Kowalski');
        clientDataRoomNewIndPage.pesel('41032251691');
        clientDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane umowy');
        contractDataRoomNewIndPage.verify();
        contractDataRoomNewIndPage.docType('Dowód osobisty');
        contractDataRoomNewIndPage.docNumber('123456789');
        contractDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Podsumowanie');
        summaryRoomNewIndPage.verify();
        summaryRoomNewIndPage.back();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.create();
        crmAgreementDetailsPage.verify();

    })

    it("Nowa umowa - klient biznesowy", () => {

        cy.routeListener('PUT', '/api/suo/execute/CRM_ORDER_INITIALIZE_BUSINESS', 'uid');

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient biznesowy');

        cy.wait('@uid');

        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Adres instalacji');
        addresssRoomNewBusPage.verify();
        addresssRoomNewBusPage.addressSearch('Katowice');
        addresssRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Oferty');
        offerRoomNewBusPage.verify();

        offerRoomNewBusPage.addOffer('@uid');

        offerRoomNewBusPage.end();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Oświadczenia')
        consentRoomNewBusPage.verify();
        consentRoomNewBusPage.sposobPozyskania('Telefoniczny');
        consentRoomNewBusPage.zgodaNaEfakture();
        consentRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Dane klienta');
        clientDataRoomNewBusPage.verify();
        clientDataRoomNewBusPage.profilSprzedazy('Domyślny profil sprzedaży');
        clientDataRoomNewBusPage.nazwa('Firma_Test');
        clientDataRoomNewBusPage.nip('9318201642');
        clientDataRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Pełnomocnicy');
        crmAssociatesRoomNewBusPage.verify();
        crmAssociatesRoomNewBusPage.forename('Jan');
        crmAssociatesRoomNewBusPage.surname('Kowalski');
        crmAssociatesRoomNewBusPage.addressSearch('Katowice');
        crmAssociatesRoomNewBusPage.save();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Dane umowy');
        contractDataRoomNewBusPage.verify();
        contractDataRoomNewBusPage.docType('Dowód osobisty');
        contractDataRoomNewBusPage.docNumber('XX 097651');
        contractDataRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Podsumowanie');
        summaryRoomNewBusPage.verify();
        summaryRoomNewBusPage.back();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.create();
        crmAgreementDetailsPage.verify();

    })

})
