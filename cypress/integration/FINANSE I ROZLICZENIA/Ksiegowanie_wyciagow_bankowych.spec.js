//  Sebastian Blaszczykiewicz
//  since 12-2019...s

import FIN_BANK_ACCOUNT_STATEMENTS from "../../support/Pages/Finanse i rozliczenia/FIN_BANK_ACCOUNT_STATEMENTS"


describe('Dodawanie i księgowanie wyciągów', function () {

    const finBankAccountStatements = new FIN_BANK_ACCOUNT_STATEMENTS;
    const CustomerNumber = 333;

    beforeEach(() => {
        cy.login();
        cy.wait(2000);
    })


    it('Wpłata z ręki - ', function () {

        cy.visit('?VIEW=V_FIN_BANK_ACCOUNT_STATEMENTS');
        finBankAccountStatements.addManualStatement(); // if empty do with current date
        finBankAccountStatements.addManualStatementOperation('Wpłata','492','9,99','01.01.2020','Zaplata za FV - TEST 1-2020');
    })

    it('Import wyciągu', function () {

        cy.visit('?VIEW=V_FIN_BANK_ACCOUNT_STATEMENTS');
        finBankAccountStatements.addBankStatement('','MT940_1klient-455.txt'); 
        // wprowadź datę która ustawi się na pierwszej pozycji listy
        // pliki wyciągów muszą znajdować się w katalogu fixtures
    })

    
})