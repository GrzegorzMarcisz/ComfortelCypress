

import 'cypress-file-upload';
export default class FIN_BANK_ACCOUNT_STATEMENTS {

    verify() {
        cy.verify('Wyciągi bankowe');
        cy.get('.datagrid-table').should('be.visible');
    }

    addManualStatement(dataPrzelewu) {
        cy.contains('.btn', 'Dodaj z ręki').click();
        cy.get('h3').should('contain.text', 'Dodawanie z ręki');

        if (dataPrzelewu) {
            cy.get('#issueDate').clear().type(dataPrzelewu);
        }
        else {
            cy.log("=== Using default date ===")
        }

        cy.contains('.modal-content .btn', 'Dodaj').click();
        cy.get('.alert-text').should('contain.text','Dodawanie wyciągu bankowego zakończone pomyślnie');
        
        cy.get('.datagrid-row-scrollable > .datagrid-scrolling-cells > .datagrid-row-actions').eq(0).click().contains('Szczegóły').click();
        cy.get('.c-sdd-details-v3-section-title').should('contain.text','Szczegóły wyciągu');
    }

    addManualStatementOperation(typoperacji,nrklienta,kwota,data,opis){
        cy.get('#customerNumber').clear().type(nrklienta);
        cy.get('.btn-primary').contains('Szukaj').click();
        cy.get('h3').should('have.length','4').and('contain.text','Klient');
        //if (typoperacji === "Wpłata") {
            
            switch (typoperacji) {
                case "Wpłata":
                    cy.get('.btn').contains('Wpłata').click();
                    cy.get('#amount').clear().type(kwota);
                    cy.get('.btn').contains('Zatwierdź').click();
                    cy.get('.clr-textarea-wrapper textarea').clear().type(opis);
                    cy.get('input[placeholder="DD.MM.YYYY"]').clear().type(data);
                    break;
                case "Wypłata":
                    cy.get('.btn').contains('Wypłata').click();
                    alert("Uwaga! Niezaimplementowana funkcja WPŁATY");
                    }
        cy.get('.btn').contains('Dodaj przelew').click();
        cy.get('.alert-text').should('contain.text','Dodanie przelewu powiodło się');
        cy.wait(1000);
        cy.contains('Zamknij').click();
        cy.wait(1000);
        cy.get('.c-sdd-details-v3-content-section').contains('Zamknięty')
        //cy.get('.c-sdd-details-v3-label-value-table').contains('Status')
    }

    addBankStatement(dataWyciagu,plikWyciagu) {
        cy.contains('.btn', 'Dodaj').click();
        cy.get('h3').should('contain.text', 'Dodawanie z pliku');
        //cy.fixture('MT940_1klient-ok.txt').as('plik');
        
        const fileName = 'wyciag-pko-test.txt';
 
        cy.fixture(plikWyciagu).then(fileContent => {
        cy.get('.modal-content .file-list').upload(
        { fileContent, fileName, mimeType: 'application/json' },
        { subjectType: 'drag-n-drop' }, );
        cy.get('h3').should('contain.text', 'Dodawanie z pliku');
            if (dataWyciagu) {
                cy.get('#ISSUE_DATE').clear().type(dataWyciagu); }
        cy.get('select[name="BULK_FILE_CONFIG"]').select('Import PKO');
        cy.contains('.modal-content .btn', 'Dodaj').click();
        cy.wait(1000);
        cy.get('clr-dg-row').should('contain.text','Plik płatności masowych');
    //cy.visit('/?VIEW=V_FIN_BANK_ACCOUNT_STATEMENTS');
        cy.wait(1000);
        cy.get('.datagrid-row-scrollable > .datagrid-scrolling-cells > .datagrid-row-actions').eq(0).click().contains('Szczegóły').click();
        cy.get('.c-sdd-details-v3-section-title').should('contain.text','Szczegóły wyciągu');
        cy.contains('.btn', 'Klienci').click().get('clr-dropdown-menu button').contains('Dopasuj automatycznie wszystkich').click()
            cy.contains('.modal-footer > .btn','Zamknij').click();
        cy.contains('.btn','Należności').click().get('clr-dropdown-menu button').contains('Dopasuj automatycznie wszystkie').click();
            cy.contains('.modal-footer > .btn','Zamknij').click();
        cy.contains('.btn','Zaksięguj').click();
            cy.contains('.modal-footer > .btn','Zamknij').click();
            cy.get('div.field-value.field-green').should('contain.text','Zaksięgowany');
        cy.contains('.btn','Zamknij').click();
            cy.get('c-cell-visualisation > span').should('contain.text','Zamknięty');
        
        })

    }

}