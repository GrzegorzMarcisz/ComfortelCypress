//  ||================================||
//  || ** QA Department **            ||
//  || S.Błaszczykiewicz 10/2019      ||
//  ||================================||

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
import FIN_INVOICE_DETAILS from '../../support/Pages/Finanse i rozliczenia/FIN_INVOICE_DETAILS';
import CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND';
import CRM_LOGICAL_RESOURCES_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_LOGICAL_RESOURCES_ROOM_NEW_IND';

import CRM_NEW_BUS_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CRM_NEW_BUS_ORDER_HALL';
import ADDRESS_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/ADDRESS_ROOM_NEW_BUS';
import OFFER_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/OFFER_ROOM_NEW_BUS';
import CONSENTS_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CONSENTS_ROOM_NEW_BUS';
import CLIENT_DATA_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CLIENT_DATA_ROOM_NEW_BUS';
import CRM_ASSOCIATES_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CRM_ASSOCIATES_ROOM_NEW_BUS';
import CONTRACT_DATA_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/CONTRACT_DATA_ROOM_NEW_BUS';
import SUMMARY_ROOM_NEW_BUS from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_biznesowego/SUMMARY_ROOM_NEW_BUS';
import CRM_EXI_IND_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Nowa_umowa_dla_istniejacego/CRM_EXI_IND_ORDER_HALL';

var nrKlienta ='';

describe("Obsługa klienta: Nowa umowa - klient indywidualny/biznesowy zatwierdzenie umowy + fakturowanie", () => {

    const finInvoiceDetailPage = new FIN_INVOICE_DETAILS;

    // zmienne testowe dot. sprzedaży ================================================================================
    let kds ='Konfiguracja dokumentu sprzedaży';
    let okresBilingowy = '2020-01-01';
    let dataWystawienia = finInvoiceDetailPage.insertCurrentDate();
    let dataSprzedazy = finInvoiceDetailPage.insertCurrentDate();
    // ===============================================================================================================
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
    
    const crmPhysicalRecourcesRoomInd = new CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND;
    const crmLogicalResourcesRoomInd = new CRM_LOGICAL_RESOURCES_ROOM_NEW_IND;

    const crmNewBusOrderHallPage = new CRM_NEW_BUS_ORDER_HALL;
    const addresssRoomNewBusPage = new ADDRESS_ROOM_NEW_BUS;
    const offerRoomNewBusPage = new OFFER_ROOM_NEW_BUS;
    const consentRoomNewBusPage = new CONSENTS_ROOM_NEW_BUS;
    const clientDataRoomNewBusPage = new CLIENT_DATA_ROOM_NEW_BUS;
    const crmAssociatesRoomNewBusPage = new CRM_ASSOCIATES_ROOM_NEW_BUS;
    const contractDataRoomNewBusPage = new CONTRACT_DATA_ROOM_NEW_BUS;
    const summaryRoomNewBusPage = new SUMMARY_ROOM_NEW_BUS;
    const crmExistingIndOrderHall = new CRM_EXI_IND_ORDER_HALL;

    let text;


    beforeEach( () => {
        cy.login();
    })

    it('Dodawanie numeru telefonu w administracji', function ()  {

        cy.wait(1000);
        cy.visit('/?VIEW=V_TEL_NUMBERS');

        var step;
        
            for (step = 0; step < 2; step++) {
          
            cy.contains('.btn','Dodaj').click()
            cy.get('c-modal #number').type(crmLogicalResourcesRoomInd.generateTelNumber());
            cy.get('c-modal #exchange').find('[name="exchange"]').select('0: 1');
            cy.get('c-modal #telecomOperator').find('[name="telecomOperator"]').select('0: 2')
            cy.contains('c-modal .btn','Zapisz').should('contain.text','Zapisz').click();
                
            }          
    })


    it('Dodawanie urządzeń - rejestracja w magazynie', function () {
        cy.wait(5000);
        cy.visit('?STORE_UID=888d4ea6-afe1-47c4-9f28-f5a6318f300e&VIEW=V_RES_RESOURCE_VALIDITY_OF_STORE');
        // dodać weryfikację pozytywnego dodania konkretnego urządzenia
        var step;
        for (step = 0; step < 2; step++) {
        cy.contains('button','Rejestracja urządzenia').click();
        cy.get('.modal-title').should('contain.text','Wybierz model urządzenia');
        cy.get('.c-vform-select-one > #MODEL_ID > .clr-control-container > .clr-select-wrapper select').select('Tester Infra');
        cy.get('.btn').contains('Dalej').click();
        cy.get('#SUPPLY_ID select').select('Grudzień 2019');
        cy.get('.modal-content #MAC_ADDRESS').type('tt:ee:ss:tt:yy:'+customerDetailsPage.generateNumber());
        cy.get('#SERIAL_NUMBER').type('SN-2019-'+customerDetailsPage.generateNumber()*123);
        cy.get('.btn').contains('Dodaj').click().wait(1000);
        cy.wait(2000);
    }
        
        
    });

    it("Nowa umowa + faktura - klient indywidualny", () => {

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
        clientDataRoomNewIndPage.forename('Filip');
        clientDataRoomNewIndPage.surname('Filipowicz '+ customerDetailsPage.generateNumber());
        clientDataRoomNewIndPage.pesel('51100584251');
        clientDataRoomNewIndPage.email('s.blaszczykiewicz@comfortel.pl');
        clientDataRoomNewIndPage.telefon('+48999555111')
        clientDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // Dane umowy
        newIndOrderHallPage.room('Dane umowy');
        contractDataRoomNewIndPage.verify();
        contractDataRoomNewIndPage.docType('Dowód osobisty');
        contractDataRoomNewIndPage.docNumber('SBX 123 456');
        contractDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        // Tworzenie i podpisywanie umowy
        newIndOrderHallPage.create();
        crmAgreementDetailsPage.verify();
        crmAgreementDetailsPage.contractApproval();
        crmAgreementDetailsPage.getCustomerNumber();
        cy.log(nrKlienta);

        crmAgreementDetailsPage.gotoCustomerPage();
        cy.wait(1000);
        //var klientUID = cy.getParamURL('CUSTOMER_UID');
        customerDetailsPage.verify();
        customerDetailsPage.checkCustomerNumber();
        //cy.log(klientUID);

        customerDetailsPage.getInvoice(kds,okresBilingowy,dataWystawienia, dataSprzedazy);
        finInvoiceDetailPage.verify();
        finInvoiceDetailPage.checkCustomerNumberOnInvoice('FV/');
        finInvoiceDetailPage.printInvoice();
          

    })

    // dodać wystawianie FV - 1 dnia miesiąca
    // wystawianie FV 30 dnia miesiąca br
    // wystawianie ost. dnia miesiąca (z pickera?)

    
    it("Nowa umowa - klient biznesowy - zatwierdzenie umowy + faktura", () => {

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
        addresssRoomNewBusPage.addressSearch('Goetla');
        addresssRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();

        crmNewBusOrderHallPage.room('Oświadczenia')
        consentRoomNewBusPage.verify();
        consentRoomNewBusPage.sposobPozyskania('Telefoniczny');
        consentRoomNewBusPage.checkConsent('CONSENT__DANE_OSOBOWE')
        consentRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        
        crmNewBusOrderHallPage.room('Oferty');
        offerRoomNewBusPage.verify();
        offerRoomNewBusPage.addOffer('@uid');
        offerRoomNewBusPage.end();
        crmNewBusOrderHallPage.verify();

        crmNewBusOrderHallPage.room('Dane klienta');
        clientDataRoomNewBusPage.verify();
        clientDataRoomNewBusPage.profilSprzedazy('Domyślny profil sprzedaży');
        clientDataRoomNewBusPage.nazwa('SATA SPZOO '+customerDetailsPage.generateNumber());
        clientDataRoomNewBusPage.nip('9318201642');
        clientDataRoomNewBusPage.email('s.blaszczykiewicz@comfortel.pl');
        clientDataRoomNewBusPage.telefon('+48999555111');
        clientDataRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Pełnomocnicy');
        crmAssociatesRoomNewBusPage.verify();
        crmAssociatesRoomNewBusPage.forename('Eliasz');
        crmAssociatesRoomNewBusPage.surname('Kowalski');
        crmAssociatesRoomNewBusPage.addressSearch('Goetla');
        crmAssociatesRoomNewBusPage.save();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Dane umowy');
        contractDataRoomNewBusPage.verify();
        contractDataRoomNewBusPage.docType('Paszport');
        contractDataRoomNewBusPage.docNumber('TST PASP 012345');
        contractDataRoomNewBusPage.next();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.room('Podsumowanie');
        summaryRoomNewBusPage.verify();
        summaryRoomNewBusPage.back();
        crmNewBusOrderHallPage.verify();
        crmNewBusOrderHallPage.create();
        crmAgreementDetailsPage.verify();
        
        crmAgreementDetailsPage.contractApproval();
        crmAgreementDetailsPage.getCustomerNumber();
        cy.log(nrKlienta);
        crmAgreementDetailsPage.gotoCustomerPage();
        cy.wait(1000);
        //var klientUID = cy.getParamURL('CUSTOMER_UID');
        customerDetailsPage.verify();
        customerDetailsPage.checkCustomerNumber();
        //cy.log(klientUID);
        customerDetailsPage.getInvoice(kds,okresBilingowy,dataWystawienia, dataSprzedazy);
        finInvoiceDetailPage.verify();
        finInvoiceDetailPage.checkCustomerNumberOnInvoice('FV/');
        finInvoiceDetailPage.printInvoice();

    })

    it('Zamówienie nowej umowy dla istniejącego klienta', () => { 
        
            //============================ zmienne testu ===========================
            
            let dataZawarciaUmowy = '13.01.2020';
            let nrKlienta = '492';
            //let customerUID = 'ea47cc40-3c6d-478b-a352-521d97fa168a';
            
            //======================================================================

        cy.wait(1000);
        cy.getCustomerUIDfromNumber(nrKlienta).wait(500);   // getting customerUID and saving as global variable CustomerUID
        let customerUID = Cypress.env('customerUID');       // reading customerUID from global variable CustomerUID
        cy.log(customerUID);
        cy.routeListener('PUT', `/api/suo/execute/CRM_ORDER_INITIALIZE_EXISTING?CUSTOMER_UID=${customerUID}`,'uid1');
        //cy.routeListener('PUT', `/api/suo/execute/CRM_ORDER_INITIALIZE_EXISTING?CUSTOMER_UID=98d641ea-a916-4c15-a2a5-04450d48d2b0`,'uid1');
        cy.get('button[title="Zamówienie nowej umowy"]').click();
        cy.wait('@uid1');
        crmExistingIndOrderHall.verify();
        crmExistingIndOrderHall.room('Adres instalacji');
        addressRoomNewIndPage.addressSearch('Tychy');
        addressRoomNewIndPage.next();
        // wybierz oswiadczenia
        newIndOrderHallPage.room('Oświadczenia');
        crmExistingIndOrderHall.setStatements();
        crmExistingIndOrderHall.verify();
        // oferty
        purchaseOrderTypeHallPage.newOrder('Oferty');
        offersRoomNewIndPage.verify();
        offersRoomNewIndPage.addOffer('@uid1');
        offersRoomNewIndPage.end();
        // Dodawanie urzadzen
        newIndOrderHallPage.room('Urządzenia');
        crmPhysicalRecourcesRoomInd.verify();
        crmPhysicalRecourcesRoomInd.addDevice();

        newIndOrderHallPage.room('Zasoby logiczne');
        crmLogicalResourcesRoomInd.verify();
        crmLogicalResourcesRoomInd.addPhoneNumber();

        crmExistingIndOrderHall.verify();
        newIndOrderHallPage.room('Dane umowy');
        cy.get('h1').should('contain.text','')
        cy.get('#contractConclusionDate').clear().type(dataZawarciaUmowy);
        cy.get('#contractIdentityDocumentType select').select('Paszport');
        cy.get('#contractIdentityDocumentNumber').type('PASP SB2019B');
        cy.get('c-action .btn').contains('Dalej').click();
        // konfiguracja dokumentu sprzedazy
        newIndOrderHallPage.room('Konf. dok. sprzedaży*');
        cy.get('#SALES_CONFIG select').select('Konfiguracja dokumentu sprzedaży');
        cy.get('c-action .btn').contains('Dalej').click();

        //zlecenie testls
        crmExistingIndOrderHall.room("Zlecenie")
        crmExistingIndOrderHall.addCommission();

        newIndOrderHallPage.create();
        crmAgreementDetailsPage.verify();
        crmAgreementDetailsPage.contractApproval();
        crmAgreementDetailsPage.getCustomerNumber();
        cy.log(nrKlienta);

        crmAgreementDetailsPage.gotoCustomerPage();
        cy.wait(1000);
        // //var klientUID = cy.getParamURL('CUSTOMER_UID');
        // customerDetailsPage.verify();
        // customerDetailsPage.checkCustomerNumber();
        // //cy.log(klientUID);

        customerDetailsPage.getInvoice(kds,okresBilingowy,dataWystawienia, dataSprzedazy);
        finInvoiceDetailPage.verify();
        finInvoiceDetailPage.checkCustomerNumberOnInvoice('FV/');
        finInvoiceDetailPage.printInvoice();
    });

    
        it.skip('NGX Drag & Drop - Cypress.io TEST', function() {
           cy.visit('https://reppners.github.io/ngx-drag-drop/')
        cy.wait(1000);
        
        cy.get('mat-card').first().drag('.my-dropzone');
        //    cy.get('mat-card').first().trigger('dragstart', { force:true });
        //    cy.get('mat-card').first().trigger('dragend');
        // //cy.get('.my-dropzone').trigger('mouseup',{ force:true });       
        });

        it.skip('NGX Drag & Drop - SORT TEST', function() {
            cy.visit('http://192.168.1.21:7680/?PURCHASE_ORDER_UID=bfb72a1b-257b-49f4-9d8b-f01b7e1abd25&VIEW=OFFERS_ROOM_NEW_IND')
         cy.wait(1000);
         
         cy.get('mat-card').first().drag('.my-dropzone');
         //    cy.get('mat-card').first().trigger('dragstart', { force:true });
         //    cy.get('mat-card').first().trigger('dragend');
         // //cy.get('.my-dropzone').trigger('mouseup',{ force:true });       
         });
       

})

