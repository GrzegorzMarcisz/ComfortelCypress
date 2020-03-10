export default class CRM_EXI_IND_ORDER_HALL {

    verify() {
        cy.get('h1').contains('indywidualnego').should('be.visible');
        cy.get('.c-sdd-process-status-text').should('contain.text', 'Tworzenie oferty');
        cy.get('.c-sdd-details-v3-label-value-table').should('contain.text', 'Klient');
        cy.get('.spinner').should('not.exist');
        cy.get('.alert-items').should('not.exist').wait(2000);
    }

    room(_room) {
        cy.contains(`c-display-text`, `${_room}`).next('.c-sdd-process-action').click();
    }

    setStatements() {
        //cy.visit(urlklienta)
        cy.get('h1').should('contain.text', 'Wybierz oświadczenia dla zamówienia')
        this.checkCheckbox('Przetwarzanie');
        this.checkCheckbox('efakturę');
        this.statementObtainTypeDropdown('Telefoniczny');
        this.checkCheckbox('marketingowe');
        this.checkCheckbox('Mikołaja');
        this.uncheckCheckbox('marketingowe');
        cy.setRadioBtn('Operacja', 'Wyrażenie zgody');
        cy.contains('.clr-form .btn', 'Zapisz').click();
        cy.get('.c-injector .btn-icon').contains('Zakończ').click();
    };

    // start section --> Oświadczenia - Statements

    checkCheckbox(label) {
        cy.contains('.datagrid-scrolling-cells', label).find('input[type="checkbox"]').check({ force: true });
    }
    uncheckCheckbox(label) {
        cy.contains('.datagrid-scrolling-cells', label).find('input[type="checkbox"]').uncheck({ force: true });
    }

    statementObtainTypeDropdown(typ) {
        cy.get('select[name="acquisitionMean"]').select(typ);
    }

    // <-- end od statements section


    getCustomerUIDfromNumber(nrklienta) {

        cy.get('#search_box').clear().type(nrklienta).type('{enter}');
        cy.get('sort-bhp-results .card').click();
        //cy.get('.number').should('contain.text', nrklienta);
        //cy.getParamURL('CUSTOMER_UID');
        Cypress.env('customerUID', cy.getParamURL('CUSTOMER_UID'));

    }

    // dodawanie zlecenia w zamowieniu nowej umowy
    addCommission() {
        cy.get('#TYPE select').select('Instalacja');
        cy.get('#PRIORITY select').select('Wysoki');
        cy.get('#SUMMARY_MODE').contains('dowolny').click();
        cy.get('#SUMMARY_TEXT').type('Zlecenie dla robota od automatu - 2020/01/SB Test');
        cy.get('#DESCRIPTION').type('Opis zlecenia. ♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪');
        cy.get('.c-vform-control .clr-form-control .clr-input-wrapper > .btn > clr-icon').click();
        cy.get('.calendar-switchers > :nth-child(2) > clr-icon').click();
        cy.get('.modal-footer .clr-wizard-footer-buttons-wrapper .btn').contains('Dalej').click();
        cy.get('.datagrid-select > .clr-radio-wrapper > .clr-control-label').eq(0).click()
        cy.get('.modal-footer .clr-wizard-footer-buttons-wrapper .btn').contains('Dalej').click();
        cy.get('.slot-container').eq(0).click();
        cy.get('.modal-footer .clr-wizard-footer-buttons-wrapper .btn').contains('Przypisz').click();
        cy.get('.btn').contains('Dalej').click();
        //cy.get('.header-card-title > span').should('contain.text','Zlecenie');
    };


}