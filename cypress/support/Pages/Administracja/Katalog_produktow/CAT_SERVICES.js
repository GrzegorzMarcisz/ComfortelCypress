//import BOK_HOME_PAGE from '../../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from './../../../../support/Pages/NAVIGATION';

//const bokHomePage = new BOK_HOME_PAGE;
const navigationPage = new NAVIGATION;
//const catServicePage = new CAT_SERVICES;

export default class CAT_SERVICES {

    verify() {
        cy.get('h1').contains('Usługi').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

    verifyServiceAttrDetails(){
        // cy.server();
        // cy.log('Badanie SDD Atrybuty')
        // cy.route("GET", "http://192.168.1.21:7580/api/sdd/definition/CAT_SERVICE_PARAMETERS?cache=0&SERVICE_ID=1").as("svdatrybuty");
        // cy.wait(500)
        // cy.wait("@svdatrybuty");
        cy.get('.c-sdd-details-v3-section-title c-cell-visualisation > .c-cell-visualisation-failed').should('contain.text','Naliczanie');
        cy.get('.c-sdd-details-v3-section-title c-cell-visualisation > .c-cell-visualisation-failed').should('contain.text','Technologia');

        cy.log('Badanie H3')
        cy.get('h3').should('be.visible').should('contain.text','Atrybuty');
        cy.get('h3').should('be.visible').should('contain.text','Ceny usługi');
        cy.get('h3').should('be.visible').should('contain.text','Stawki VAT usługi');
        cy.get('c-display-text.c-sdd-table-cell c-cell-visualisation > .c-cell-visualisation-failed').should('contain.text','Kod');
        cy.get('.alert-items').should('not.exist');
    
    }

    verifyServicePageButtons(){
        cy.log('Badanie przycisków/button')
        cy.get('c-view-links .btn').should('contain.text','Wróć do usług');
        cy.get('button span').should('contain.text','Utwórz produkt');
        cy.get('button span').should('contain.text','Utwórz promocję');
        cy.get('.btn-danger').should('contain.text','Usuń').should('have.css','background-color').and('equal','rgb(225, 34, 0)');
        cy.get('button span').should('contain.text','Edytuj');
        cy.get('button span').should('contain.text','Edytuj atrybuty');
        cy.get('button span').should('contain.text','Dodaj');
        cy.get('.alert-items').should('not.exist');
    }


    addService(nazwaUslugi){
        cy.get('.c-actions-items > c-action .btn').contains('Dodaj').click();
        cy.log('=== addService before if service name decide ===');
            if (nazwaUslugi) {
            cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #name').type(nazwaUslugi)
            cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #code').type(nazwaUslugi);
            }
            else {
            cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #name').type('__USLUGA__TEST__ ąęółżźć')
            cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #code').type('_TEST'+Math.floor((Math.random() * 99) + 1));
            }
        // cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #code').type('_TEST'+Math.floor((Math.random() * 99) + 1));
        cy.get('#billingUnit > .clr-control-container > .clr-select-wrapper > select').select('0: szt.')
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #pcgs').type('64.20.1')
        cy.get('#accountNumber > .clr-control-container > .clr-select-wrapper select').select('0: 18')
        cy.get('#billCycleDef > .clr-control-container > .clr-select-wrapper select').select('0: 1')
        cy.get('#useInitPriceAndVat input[type="checkbox"]').check({ force: true });
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #unitPriceNet').type('1')
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #unitPriceGross').type('0.01');
        cy.get('#vat > .clr-control-container > .clr-select-wrapper select').select('0: 3')
        cy.get('.ng-star-inserted > c-action > .ng-star-inserted > .btn').contains('Dodaj').click();
        cy.wait(1000);
        cy.get('.c-view-init').should('not.be.visible','.spinner');
        cy.visit('?VIEW=V_CAT_SERVICES');
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').should('be.visible').click();
        
        
        if (nazwaUslugi) {
            cy.get('#NAMES').clear().type(nazwaUslugi);
            cy.get('.btn').contains('Filtruj').click().wait(1500);
            cy.get('.datagrid').should('contain.text', nazwaUslugi);
        }
        else {
            cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć');
            cy.get('.btn').contains('Filtruj').click().wait(1500);
            cy.get('#NAMES').should('contain.text','__USLUGA__TEST__ ąęółżźć');
        }
    }

    removeService(nazwaUslugi){
        const catServicePage = new CAT_SERVICES;
        cy.wait(1000);
        cy.visit('?VIEW=V_CAT_SERVICES');
        //bokHomePage.verify();
        //navigationPage.toogleTopMenu('Administracja');
        //navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        this.verify();
        cy.wait(500);
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.log('=== removeService before filtering ===');
        if (nazwaUslugi) {
            cy.get('#NAMES').clear().type(nazwaUslugi); }
            else {
                cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć'); }

        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.get('button[title="Usuń"]').should('be.visible').click();
        cy.get('.modal-content .btn').contains('Tak').wait(500).click();
    }

    checkServiceExist(nazwaUslugi){
        cy.wait(1500);
        cy.visit('?VIEW=V_CAT_SERVICES');
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.log('=== checkService before if filtering ===');
        if (nazwaUslugi) {
            cy.get('#NAMES').clear().type(nazwaUslugi);}
        else {
            cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć');}
        
        cy.get('.btn').contains('Filtruj').click().wait(1000);

        cy.get('.datagrid-placeholder').then(($brakwynikow) => {
            let $brakwynikowtxt = $brakwynikow.text()
            if ($brakwynikowtxt == "Brak wyników") {
                cy.log('== Nie znaleziono == Tworze usluge ===');
                this.addService(nazwaUslugi);
            } else {
                cy.log('=== Znaleziono usluge: '+nazwaUslugi);
                //this.removeService(nazwaUslugi);
            }
          });
    }

    // poniżej refactor testów dodawania, usuwania usług  - bez skomplikowanej logiki, bez smart rozwiązań..bez if

    addServiceTest(){
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        this.verify();
        cy.get('.c-actions-items > c-action .btn').contains('Dodaj').click();
        cy.log('=== addServiceTest starting ===');
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #name').type('__USLUGA__TEST__ ąęółżźć')
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #code').type('_TEST'+Math.floor((Math.random() * 99) + 1));
        cy.get('#billingUnit > .clr-control-container > .clr-select-wrapper > select').select('0: szt.')
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #pcgs').type('64.20.1')
        cy.get('#accountNumber > .clr-control-container > .clr-select-wrapper select').select('0: 18')
        cy.get('#billCycleDef > .clr-control-container > .clr-select-wrapper select').select('0: 1')
        cy.get('#useInitPriceAndVat input[type="checkbox"]').check({ force: true });
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #unitPriceNet').type('1')
        cy.get('.clr-form-control > .clr-control-container > .clr-input-wrapper > #unitPriceGross').type('0.01');
        cy.get('#vat > .clr-control-container > .clr-select-wrapper select').select('0: 3')
        cy.get('.ng-star-inserted > c-action > .ng-star-inserted > .btn').contains('Dodaj').click();
        cy.wait(1000);
        cy.get('.c-view-init').should('not.be.visible','.spinner');
        cy.visit('?VIEW=V_CAT_SERVICES');
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').should('be.visible').click();
        cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć');
        cy.get('.btn').contains('Filtruj').click().wait(1500);
        cy.get('.datagrid').should('contain.text','__USLUGA__TEST__ ąęółżźć');   
    }

    removeServiceTest(){
        cy.wait(1000);
        cy.visit('?VIEW=V_CAT_SERVICES');
        cy.log('=== removeServiceTest starting ===');
        this.verify();
        cy.wait(500);
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć');
        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.get('button[title="Usuń"]').should('be.visible').click();
        cy.get('.modal-content .btn').contains('Tak').wait(500).click();
        // checking deleted
        this.verify();
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.get('#NAMES').clear().type('__USLUGA__TEST__ ąęółżźć');
        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid-placeholder').should('contain.text','Brak wyników');   
        cy.log('=== Usługa usunięta ===');
    }

}