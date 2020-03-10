/*||================================||
  || ** QA Department **            ||
  || S.Błaszczykiewicz              ||
  || since 10/2019                  ||
  ||================================||
*/

import CUSTOMER_DETAILS from "../../support/Pages/BOK/Ewidencja klienta/CUSTOMER_DETAILS";
import V_CRM_SALES_DOCUMENTS_CONFIG from "../../support/Pages/BOK/Ewidencja klienta/V_CRM_SALES_DOCUMENTS_CONFIG";
import CUSTOMER_LIST from "../../support/Pages/BOK/CUSTOMERS_LIST";
import ADDRESS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/ADDRESS_ROOM_NEW_IND';
import CRM_EXI_IND_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Nowa_umowa_dla_istniejacego/CRM_EXI_IND_ORDER_HALL';



//var urlklienta = "?CUSTOMER_UID=d5a374de-31fb-4e79-8859-e4d7e3e55c90&VIEW=V_CUSTOMER_DETAILS";
//var CUSTOMER_UID ='1a39d336-696b-44e3-9b45-f4f2848a91be';

describe("Testy widoku szczegółów klienta istniejącego", () => {

    const customerDetailsPage = new CUSTOMER_DETAILS;
    const crmSalesDocumentsConfig = new V_CRM_SALES_DOCUMENTS_CONFIG;
    const customerListPage = new CUSTOMER_LIST;
    const addressRoomNewIndPage = new ADDRESS_ROOM_NEW_IND;
    const crmExistingIndOrderHall = new CRM_EXI_IND_ORDER_HALL;

    // Ustaw part URL klienta w celu testu konkretnego klienta
    var urlklienta = Cypress.env('customerUID');

    beforeEach( () => {
        cy.login();
        crmExistingIndOrderHall.getCustomerUIDfromNumber(443);
        cy.wait(1000);
       //cy.visit(urlklienta)
    });


    it.skip("Test edycji danych klienta biznesowego", () => {

        customerDetailsPage.verify();
        customerDetailsPage.editSection('Dane podstawowe');
        customerDetailsPage.setBusinessCustomerData('Biznesowy '+customerDetailsPage.generateNumber(),'5741946894','432527626','1000555');
    });

    it('Test zmiany adresu korespondencyjnego klienta biznesowego', () => {
        
        customerDetailsPage.editSection('Adres korespondencyjny');
        cy.get('#COMPANY_NAME_ID').then((firma) => {
            if (firma) {
              cy.get('#COMPANY_NAME_ID').clear();
              cy.get('#COMPANY_NAME_ID').type('Testers S.A.');
            }
            else
            {
            cy.get('#FORENAME').type('Tadeusz');
            cy.get('#SURNAME').type('Robak '+customerDetailsPage.generateNumber());
            }
          })

        cy.get('.clr-control-label > .btn').contains('Adres').click();
        //addressRoomNewIndPage.addressSearch('Chorzów');
        cy.get('.ng-input > input').type('Opolska');
        cy.get('div [role="option"]').eq(0).wait(1000).click();
        cy.get('.btn').contains('Zapisz').click();
        cy.wait(1000);
        cy.get('.box-separator > .box-element > .box-content > :nth-child(3) > :nth-child(2)').should('contain.text','Opolska');
    });

    it.skip("Test edycji numeru konta", () => {
        cy.wait(500);
        customerDetailsPage.editSection('Konto bankowe');
        cy.get('.modal-title').should('contain.text','Edycja indywidualnego konta rozliczeniowego').wait(1000);
        cy.get('#BANK_ACCOUNT_UID > .clr-control-container select').select('PKO BP')
        cy.get('.modal-content .btn').contains('Zapisz').click();
        cy.wait(500);
        cy.get('.alert-text').should('contain.text','Edycja indywidualnego konta rozliczeniowego zakończona pomyślnie');
        });


        it("Test edycji danych kontaktowych", () => {
            //cy.visit(urlklienta)
            cy.wait(1000);
            customerDetailsPage.editSection('Dane kontaktowe');
            customerDetailsPage.setContactData('s.blaszczykiewicz@comfortel.pl','668661900');
        });

        it.skip("Test edycji etykiet klienta", () => {
            //cy.visit(urlklienta)
            cy.wait(1000);
            customerDetailsPage.verify();
            customerDetailsPage.clearCustomerTag();
            customerDetailsPage.setCustomerTag('CEBT - Celowa Etykieta Błędu Testowego');
            //customerDetailsPage.checkCustomerNumber('CEBT');
        });


        it('Testy notatek w widoku klienta', () => {
            cy.wait(1000);
            cy.get('.card  .note-pnl .btn').click({force:true});
            cy.get('#NOTE_ID').type('Notatka testowa QA Department 2019{enter}Memento Mori{enter}ąśęćżźń€ół!@#-=-');
            cy.get('.modal-footer .btn').contains('Zapisz').click();
            cy.get('sort-cd-note .note-pnl').should('contain.text','QA Department 2019');

        });

       
        it('Testy oświadczeń klienta - wyrażenie wszystkich zgód', () => {
            //cy.visit(urlklienta)
            cy.wait(1000);
            customerDetailsPage.editSection('Oświadczenia');
            // cy.get('.datagrid-column-title > .clr-checkbox-wrapper > .clr-control-label').click();
            // cy.setRadioBtn('Operacja','Wyrażenie zgody');
            // cy.contains('clr-modal form .btn','Zapisz').click();
            cy.get('.modal-footer > .btn-primary').contains('Zakończ').click();


        });

        it('Testy oświadczeń klienta - odwołanie wszystkich zgód', () => {
            //cy.visit(urlklienta)
            cy.wait(1000);
            customerDetailsPage.editSection('Oświadczenia');
            cy.get('.datagrid-column-title > .clr-checkbox-wrapper > .clr-control-label').click();
            cy.setRadioBtn('Operacja','Niewyrażenie zgody');
            cy.contains('clr-modal form .btn','Zapisz').click();
            cy.get('.modal-footer > .btn-primary').contains('Zakończ').click();
        });

        it('Testy oświadczeń klienta - wybranie brzegowych zgód', () => {
            //cy.visit(urlklienta)
            cy.wait(1000);
            customerDetailsPage.editSection('Oświadczenia');
                customerDetailsPage.checkCheckbox('Przetwarzanie');
                customerDetailsPage.checkCheckbox('efakturę');
                customerDetailsPage.statementObtainTypeDropdown('Telefoniczny');
                customerDetailsPage.checkCheckbox('marketingowe');
                customerDetailsPage.checkCheckbox('Mikołaja');
                customerDetailsPage.uncheckCheckbox('marketingowe');
            cy.setRadioBtn('Operacja','Wyrażenie zgody');
            cy.contains('clr-modal form .btn','Zapisz').click();
            cy.get('.modal-footer > .btn-primary').contains('Zakończ').click();
        });

        it('Test zmiany adresu głównego klienta', () => {
            customerDetailsPage.editSection('Adres główny');
            addressRoomNewIndPage.addressSearch('Chorzów');
            cy.get('.btn').contains('Zapisz').click();
            cy.wait(1000);
            cy.get('.box-separator > .box-element > .box-content >').contains('Adres').next().should('contain.text','Chorzów').wait(500);
        });

        it("Test edycji danych klienta indywidualnego", () => {
            customerDetailsPage.verify();
            customerDetailsPage.editSection('Dane podstawowe');
            customerDetailsPage.setIndividualCustomerData('Janek','Swoboda '+customerDetailsPage.generateNumber(),'41032251691');
        });
    
        it('Test zmiany adresu korespondencyjnego klienta indywidualnego', () => {
            cy.visit(urlklienta)
            customerDetailsPage.editSection('Adres korespondencyjny');
            cy.get('#FORENAME').clear().type('Tadeusz');
            cy.get('#SURNAME').clear().type('Robak');
            cy.get('.clr-control-label > .btn').contains('Adres').click();
            cy.get('.ng-input > input').type('Opolska');
            cy.get('div [role="option"]').eq(0).wait(1000).click();
            cy.get('.btn').contains('Zapisz').click();
            cy.wait(1000);
            cy.get('.box-separator > .box-element > .box-content > :nth-child(3) > :nth-child(2)').should('contain.text','Opolska');
        });

        it('Testy dodawania komentarzy w widoku klienta', () => {
            cy.get('.card > .card-block textarea#input').type('Hello Testers! 2019 (c)')
            cy.get('.comments-pnl .comment-buttons > .btn-primary').click();
            cy.get('.card > .card-block textarea#input').type('-= Notatki! =- ąźćżąęółę !@#$%^&*() =-')
            cy.get('.comments-pnl .comment-buttons > .btn-primary').click();
            cy.get('button clr-icon[shape="happy-face"]').click().get('button[aria-label="👍, +1, thumbsup"]').eq(1).click().get('button[aria-label="😎, sunglasses"]').eq(0).click();
            cy.get('.card > .card-block textarea#input').type('{enter}');
        });

        it('Test edycji komentarza w widoku klienta', () => {
            cy.get('div.comment-pnl > div.comment-detail-pnl button clr-icon[shape="pencil"]').eq(1).click({force:true});
            cy.get('.card > .card-block textarea#input').clear().type('AutoEdit     ┌∩┐(◣_◢)┌∩┐     TesT').type('{enter}').wait(500);
            cy.get('.alert-text').should('contain.text','Edycja komentarza powiodła się');
            
        });

        it('Testy usuwania komentarzy w widoku klienta', () => {
            cy.get('div.comment-pnl > div.comment-detail-pnl button clr-icon[shape="times"]').eq(2).click({force:true});
            cy.get('.modal-title').should('contain.text','Usuwanie komentarza').wait(500);
            cy.get('.btn-danger').contains('Usuń').click();
            cy.get('div.comment-pnl > div.comment-detail-pnl button clr-icon[shape="times"]').eq(2).click({force:true});
            cy.get('.modal-title').should('contain.text','Usuwanie komentarza').wait(500);
            cy.get('.btn-danger').contains('Usuń').click();
            cy.get('.alert-text').should('contain.text','Usunięcie komentarza powiodło się');
        });

        it('Test utworzenia zlecenia z widoku szczegółów klienta', () => {
            cy.contains('Utwórz zlecenie').click();
            cy.get('#TYPE select').select('Instalacja');
            cy.get('#PRIORITY select').select('Wysoki');
            cy.get('#SUMMARY_MODE').contains('dowolny').click();
            cy.get('#SUMMARY_TEXT').type('Zlecenie dla robota od automatu - 2019/11 Test');
            cy.get('#DESCRIPTION').type('Opis zlecenia. ♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪');
            //cy.get('.modal-content #ADDRESS select').select('1: 608313') - problem z wybraniem adresu
            cy.get('.modal-content #SUBSCRIPTION .clr-multiselect-wrapper select option').eq(1).click().type('{selectall}')
            cy.get('.modal-content .btn').contains('Dodaj').click();
            cy.get('.header-card-title > span').should('contain.text','Zlecenie');
            cy.contains('Rozpocznij').click();
            cy.contains('.btn','Zmień').click();
            cy.get('.menu-group.ng-star-inserted > .btn').should('contain.text','Zamknij');
            cy.get('.clr-col > .card > .card-block .label').should('contain.text','W realizacji');
        });

        it('Test utworzenia nowego profilu KDS', () => {
            cy.contains('Konfig. dokumentów').click();
            crmSalesDocumentsConfig.verify();
            crmSalesDocumentsConfig.addKDS('KDS'+customerDetailsPage.generateNumber());
        });
        
})