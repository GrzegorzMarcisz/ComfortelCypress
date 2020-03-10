import CAT_SERVICES from '../../../../support/Pages/Administracja/Katalog_produktow/CAT_SERVICES';

const catServicePage = new CAT_SERVICES;

export default class CAT_PRODUCTS {

    verify() {
        cy.get('h1').contains('Produkty').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    }

    createProduct(uslugaBazowa) {
        cy.wait(1000);
        cy.visit('?VIEW=V_CAT_SERVICES');
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.log('== createProduct == starting ===')
        if (uslugaBazowa) {
            catServicePage.checkServiceExist(uslugaBazowa);
        }
        //cy.get('#NAMES').clear().type(uslugaBazowa);
        else {
            catServicePage.addService('TestProduktu');
        }
        cy.log('== createProduct after checking or adding before filtering ===')
        //cy.get('.btn').contains('Filtruj').click().wait(1000); // niepotrzebny filterek?
        cy.log('=== createProduct after checkService, getting first service... ===');
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.contains('.btn', 'Utwórz produkt').click();
        if (uslugaBazowa) {
            cy.get('#NAME').clear().type(uslugaBazowa);
        }
        else {
            cy.get('#NAME').clear().type('TestProduktu');
        }
        cy.get('#IDENT').clear().type('TEST ' + Math.floor((Math.random() * 99) + 1));
        cy.get('.modal-content #DESCRIPTION').type(this.insertCurrentDate().toString());
        cy.contains('.modal-content .btn', 'Dodaj').click();
        let nazwaProduktu = uslugaBazowa;
        cy.log('=== createProduct done! ===');
        cy.get('h3').should('contain.text', 'Produkty zależne');
        this.removeProduct(nazwaProduktu);

    }

    removeProduct(nazwaProduktu) {
        const catServicePage = new CAT_SERVICES;
        cy.wait(1000);
        cy.visit('/?VIEW=CAT_PRODUCTS');
        this.verify();
        cy.log('=== removeProduct starting.... ===');
        cy.wait(500);
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.log('=== removeService before filtering ===');
        if (nazwaProduktu) {
            cy.get('#NAMES').clear().type(nazwaProduktu);
        }
        else {
            cy.get('#NAMES').clear().type('TestProduktu');
        }

        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.get('button[title="Usuń"]').should('be.visible').click();
        cy.get('.modal-content .btn').contains('Tak').wait(500).click();
    }

    insertCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January = 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '-' + mm + '-' + yyyy;
        return today;
    }

    createProductTest() {
        cy.wait(1000);
        cy.log('=== createProductTest - going to service... ===');
        catServicePage.addServiceTest();
        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.contains('.btn', 'Utwórz produkt').click();
        cy.get('#NAME').clear().type('TestProduktu - zażółćąęł€');
        cy.get('#IDENT').clear().type('TEST ' + Math.floor((Math.random() * 99) + 1));
        cy.get('.modal-content #DESCRIPTION').type(this.insertCurrentDate().toString());
        cy.contains('.modal-content .btn', 'Dodaj').click();
        cy.log('=== createProduct done! ===');
        cy.get('h3').should('contain.text', 'Produkty zależne');
        cy.get('span.c-cell-visualisation-failed.ng-star-inserted').should('contain.text','TestProduktu - zażółćąęł€');
    }

    removeProductTest() {
        cy.wait(1000);
        cy.visit('/?VIEW=CAT_PRODUCTS');
        this.verify();
        cy.log('=== removeProductTest starting.... ===');
        cy.wait(500);
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.log('=== removeServiceTest searching for product ===');
        cy.get('#NAMES').clear().type('TestProduktu - zażółćąęł€');
        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        cy.wait(1000);
        cy.get('button[title="Usuń"]').should('be.visible').click();
        cy.get('.modal-content .btn').contains('Tak').wait(500).click();
        // verification that product deleted
        cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        cy.get('#NAMES').clear().type('TestProduktu - zażółćąęł€');
        cy.get('.btn').contains('Filtruj').click().wait(1000);
        cy.get('.datagrid-placeholder').should('contain.text','Brak wyników');   
        cy.log('=== Product removed  / Usunięty ===');
        catServicePage.removeServiceTest();
    }

    editProduct(){
        catServicePage.addServiceTest();
        this.createProductTest();
        cy.wait(500);
        // cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        // cy.log('=== editProduct - searching for product ===');
        // cy.get('#NAMES').clear().type('TestProduktu - zażółćąęł€');
        // cy.get('.btn').contains('Filtruj').click().wait(1000);
        // cy.get('.datagrid').find('c-vis-action.ng-star-inserted > .ng-star-inserted').eq(0).click();
        // cy.wait(1000);
        cy.get('button[title="Edytuj"]').should('be.visible').click();
        cy.get('#NAME').clear().type('TestProduktu - zażółćąęł€');
        cy.get('#IDENT').clear();
        cy.get('.modal-content #DESCRIPTION').clear();
        cy.get('.modal-content .btn').contains('Zapisz').wait(500).click();
        // dodac weryfikacje
    }

}