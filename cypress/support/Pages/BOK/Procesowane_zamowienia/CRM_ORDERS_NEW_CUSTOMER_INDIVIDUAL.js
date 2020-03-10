var nrZamowienia;
var nrUmowy;


export default class CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL {

    verify() {
        cy.verify('Zamówienia nowego klienta indywidualnego');
        cy.get('.datagrid-table').should('be.visible');
    }

    filterToggle() {
        if (cy.get('[hidden]')) {
            cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        }
        else {
            cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr');
        }
    }

    filterRadio(radioName, radioOptionLabel) {
        this.filterToggle();
        cy.contains('clr-radio-container', radioName).find('label').contains(radioOptionLabel).click();
        //cy.get('.btn').contains('Filtruj').click(); //tymczasowo
    }

    filterInputSetText(labelName, inputSetText) {
        cy.contains('clr-input-container', labelName).find('input').type(inputSetText);
    }

    filterBtnFilter() {
        cy.get('.btn').contains("Filtruj").should('contain.text', 'Filtruj').click();
        cy.wait(500);
    }

    filterBtnClear() {
        cy.get('.btn').contains("Wyczyść").should('not.be.disabled').click();
    }

    filterSearch(nrZamowienia, nrKlienta, dataOd, dataDo, statusZam) {
        cy.wait(500);
        cy.log("Nr zam w filterSearch: " + nrZamowienia);
        this.filterToggle();
        if (nrZamowienia !== "") {
            this.filterInputSetText("Numer zamówienia", nrZamowienia);
        }
        if (nrKlienta !== "") {
            this.filterInputSetText('Nr klienta', nrKlienta);
        }
        if (dataOd !== "") {
            this.filterInputSetText('Data od', dataOd);
        }
        if (dataDo !== "") {
            this.filterInputSetText('Data do', dataDo);
        }
        if (statusZam !== "") {
            this.filterInputSetText('Status', statusZam);
        }

        this.filterBtnFilter(); // click filtering
        cy.get('.datagrid-scrolling-cells').should('contain.text', nrZamowienia)
    }

    // getOrderNumberFromSummary(){
    //     cy.contains(`c-display-text`, `Podsumowanie`).next('.c-sdd-process-action').click();
    //     cy.get('h1').invoke('text').then((nrzamstring) => {
    //         cy.log(nrzamstring);
    //         var nrZamowienia = nrzamstring
    //             .replace('Podsumowanie zamówienia ','')
    //         cy.log(nrZamowienia);
    //         })
    //     cy.get('h1').then(() => {
    //         cy.log(temp1);
    //         var temp1 = nrZamowienia;
    //         })
    // }

    cancelIndOrderAndCheck() {
        cy.wait(1000);
        cy.get('h1').invoke('text').then((nrzamstring) => {
            nrZamowienia = nrzamstring
                .replace('Zamówienie: ', '')
                .replace(' - dla nowego klienta indywidualnego', '')
        })
        cy.get('h1').then(() => {
            cy.wait(2000);
            //this.checkCancelledOrder(nrZamowienia);
            cy.log("Sprawdzanie nr zamowienia: " + nrZamowienia);
            cy.contains('Anuluj').click();
            cy.get('.modal-title-wrapper > h3').should('contain.text', 'Anulowanie zamówienia');
            cy.contains('Tak').click();
            cy.visit('/?VIEW=V_CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL');
            this.filterSearch(nrZamowienia, '', '', '', '');
            cy.get('.c-cell-visualisation > c-vis-icon.ng-star-inserted > .c-icon-in-table > span.ng-star-inserted').should('contain.text', 'Anulowane');
        })
    }

    // przeniesc do page'a biznesowego
    cancelBusinessOrderAndCheck() {
        cy.wait(1000);
        cy.get('h1').invoke('text').then((nrzamstring) => {
            nrZamowienia = nrzamstring
                .replace('Zamówienie: ', '')
                .replace(' - dla nowego klienta biznesowego', '')
        })
        cy.get('h1').then(() => {
            cy.wait(2000);
            //this.checkCancelledOrder(nrZamowienia);
            cy.log("Sprawdzanie nr zamowienia: " + nrZamowienia);
            cy.contains('Anuluj').click();
            cy.get('.modal-title-wrapper > h3').should('contain.text', 'Anulowanie zamówienia');
            cy.contains('Tak').click();
            cy.visit('?VIEW=V_CRM_ORDERS_NEW_CUSTOMER_BUSINESS');
            this.filterSearch(nrZamowienia, '', '', '', '');
            cy.get('.c-cell-visualisation > c-vis-icon.ng-star-inserted > .c-icon-in-table > span.ng-star-inserted').should('contain.text', 'Anulowane');
        })
    }

}