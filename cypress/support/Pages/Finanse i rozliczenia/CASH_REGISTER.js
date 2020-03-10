export default class CASH_REGISTER {

    verify() {
        cy.verify('Kasa');
        cy.get('div').contains('Wybierz kasę').should('be.visible');
    } 

    chooseFirstCash(){
        cy.get('.info-label').should('contain.text','Wybierz kasę');
        cy.get('.card > .card-header').eq(0).click()
        cy.get('.info-label').should('contain.text','Wybierz raport dzienny').wait(100);
    }
    
    chooseCash(kasa){
        cy.get('.info-label').should('contain.text','Wybierz kasę');
        cy.get('.card > .card-header').contains(kasa).click()
        cy.get('.info-label').should('contain.text','Wybierz raport dzienny').wait(100);
    }

    chooseFirstReport(raport){
        cy.get('.card > .card-header').eq(0).click();
    }
    
    chooseReport(raport){
        cy.get('.card > .card-header').contains(raport).click();
    }

    chooseCustomer(nrKlienta){
        cy.get('h1').should('contain.text','Wyszukaj klienta');
        cy.get('#customerNumber').type(nrKlienta);
        cy.get('.btn').contains('Wyszukaj').click();
        cy.get('.card-block').should('be.visible').click()
        cy.get('h1').should('contain.text','Klient');
    }

    payFirstInvoiceInCash(){
        cy.visit('?VIEW=CASH_REGISTER');
        cy.get('.datagrid-select > .clr-checkbox-wrapper > .clr-control-label').eq('0').click();
        cy.get('.btn').contains('Wykonaj operację').should('not.be.disabled');
        cy.get('textarea[name="description"]').type(' - wplata automat testowy')
        cy.get('.btn').contains('Wykonaj operację').click();
        cy.get('div[style="display: flex"]').should('contain.text','Kwota do zapłaty');
        cy.setRadioBtn('Sposób płatności','Gotówka');
            cy.get('[style="display: flex"] > span').next().invoke('text').then((kwotawplaty) => {
            cy.get('input[formcontrolname="amount"][type="number"]').type(kwotawplaty);
            cy.get('.btn').contains('Zapłać').click();
            cy.get('.info-label').contains('Kwota').next().should('contain.text',kwotawplaty);
            })
        cy.get('.alert-text > span').should('contain.text','Operacja płatności została pomyślnie dokonana')
        
    }

    payTheInvoice(nrfaktury){
        //cy.get('.datagrid-select > .clr-checkbox-wrapper > .clr-control-label').click();
        cy.visit('?VIEW=CASH_REGISTER');
        cy.get('.datagrid-row-scrollable > .datagrid-scrolling-cells > :nth-child(2)').contains(nrfaktury).prev().find('[type="checkbox"]').check({force:true}).should('be.checked');
        cy.get('.btn').contains('Wykonaj operację').should('not.be.disabled');
        cy.get('textarea[name="description"]').type(' - wplata automat testowy')
        cy.get('.btn').contains('Wykonaj operację').click();
        cy.get('div[style="display: flex"]').should('contain.text','Kwota do zapłaty');
        cy.setRadioBtn('Sposób płatności','Gotówka');
            cy.get('[style="display: flex"] > span').next().invoke('text').then((kwotawplaty) => {
            cy.get('input[formcontrolname="amount"][type="number"]').type(kwotawplaty);
            cy.get('.btn').contains('Zapłać').click();
            cy.get('.info-label').contains('Kwota').next().should('contain.text',kwotawplaty);
            })
        cy.get('.alert-text > span').should('contain.text','Operacja płatności została pomyślnie dokonana')
    }

    checkLastPaid(){
        cy.visit('?VIEW=CASH_REGISTER');
        cy.wait(500);
        cy.get('.info-label').contains('Kwota').next().should('contain.text',kwotawplaty);
        // dodać w przyszłości inne asercje i checki np porównanie salda przed i po wpłacie
    }

    addCustomPayment(opis, kwotawplaty){
        //cy.visit('?VIEW=CASH_REGISTER');
        cy.get('.btn').contains('Dodaj operację niestandardową').click();
        cy.get('.modal-title').should('contain.text','Dodaj operację niestandardową');
        cy.get('#description').type(opis);
        cy.get('#amount').type(kwotawplaty);
        cy.get('.modal-footer .btn').contains('Dodaj').click();
        cy.get('h1').should('contain.text','Kwota do zapłaty');
        cy.get('h1').should('contain.text',kwotawplaty);
        cy.get('.btn').contains('Wykonaj operację').should('not.be.disabled');
        cy.get('textarea[name="description"]').type(' - wplata niestandardowa automat testowy')
        cy.get('.btn').contains('Wykonaj operację').click();
        cy.setRadioBtn('Sposób płatności','Gotówka');
        cy.get('input[formcontrolname="amount"][type="number"]').type('20,00');
        cy.get('.modal-content .alert').should('contain.text','10,01');
        cy.get('.btn').contains('Zapłać').click();
        cy.wait(1000);
        cy.get('.info-label').contains('Kwota').next().should('contain.text','9,99');
        cy.get('.alert-text > span').should('contain.text','Operacja płatności została pomyślnie dokonana');
    }

    addNewDefaultReport(kasa){
        cy.visit('?VIEW=CASH_REGISTER');
        this.chooseCash(kasa);
        cy.get('.card > .card-header').contains('Dodaj raport').click();
        cy.get('.modal-title').should('contain.text','Dodawanie raportu kasowego');
        cy.wait(1500);
            cy.get('#forDay').invoke('val').then((dzienRaportu) => {
            
                cy.log(dzienRaportu);
            });
        cy.wait(1500);
            cy.get('#openingBalance').invoke('val').then((saldoOtwarcia0) => {
                let saldoOtwarcia = saldoOtwarcia0.replace('.',',');
                cy.log(saldoOtwarcia);
                cy.get('.modal-footer .btn').contains('Zapisz').click();
                cy.get('.modal-header').should('not.be.visible');
                cy.wait(1500);
                cy.get('.info-label').contains('Na datę').next().should('contain.text','2019'); // zmienic date recznie :(
                cy.get('.info-label').contains('Saldo otwarcia').next().should('contain.text',saldoOtwarcia);
                cy.get('.btn').contains('Przejdź do raportu').click();
            });
    }

    deleteCurrentReport() {
        cy.get('.btn-danger').click();
        cy.get('.modal-title').should('have.text','Usuwanie danych');
        cy.get('.btn').contains('Tak').click();
        cy.get('.c-view-header').should('contain.text','Raporty kasowe');
    }

    addNewCustomReport(dzienRaportu, saldoOtwarcia){
        cy.visit('?VIEW=CASH_REGISTER');
        this.chooseCash('Kasa 3')
        cy.get('.card > .card-header').contains('Dodaj raport').click();
        cy.get('.modal-title').should('contain.text','Dodawanie raportu kasowego');
        cy.get('#forDay').clear().type(dzienRaportu);
        cy.get('#openingBalance').clear().type(saldoOtwarcia);
        cy.wait(500);
        cy.get('.modal-footer .btn').contains('Zapisz').click();
        cy.wait(1000);
        cy.get('.info-label').contains('Na datę').next().should('contain.text','2019'); // zmienic date recznie :(
        cy.get('.info-label').contains('Saldo otwarcia').next().should('contain.text',saldoOtwarcia);
    }

    addNewCustomInvalidReport(dzienRaportu, saldoOtwarcia, komunikatOstrzezenia){
        cy.visit('?VIEW=CASH_REGISTER');
        this.chooseCash('Kasa 3')
        cy.get('.card > .card-header').contains('Dodaj raport').click();
        cy.get('.modal-title').should('contain.text','Dodawanie raportu kasowego');
        cy.get('#forDay').clear().type(dzienRaportu);
        cy.get('#openingBalance').clear().type(saldoOtwarcia);
        cy.wait(500);
        cy.get('.modal-footer .btn').contains('Zapisz').click();
        cy.wait(1000);
        this.checkReportAddWarning(komunikatOstrzezenia);
    }

    deleteReport(kasa, raport){
        cy.visit('?VIEW=CASH_REGISTER');
        this.chooseCash(kasa);
        this.chooseReport(raport);
    }

    checkReportAddWarning(komunikatOstrzezenia){
        cy.get('.alert-text > span').should('contain.text',komunikatOstrzezenia);
    }

}