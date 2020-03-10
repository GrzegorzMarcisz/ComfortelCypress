//  ||================================||
//  || ** QA Department **            ||
//  || S.Błaszczykiewicz 10/2019      ||
//  ||================================||

var nrKlienta ='';

export default class CUSTOMER_DETAILS {

    verify() {
        cy.get('h3').should('contain.text','Szczegóły klienta');
        //tymczasowo cy.get('.status').should('contain.text','Saldo');
        cy.get('.alert-items').should('not.exist');
        cy.get('.card-header').should('contain.text','Notatka');
    }
    
    editSection(h5string){
        cy.contains('h5 > span',h5string).next('.ng-star-inserted').find('.btn').click({force:true});
    }

    // start section --> Oświadczenia - Statements

    checkCheckbox(label){
        cy.contains('.datagrid-scrolling-cells',label).find('input[type="checkbox"]').check({force:true});
    }
    uncheckCheckbox(label){
        cy.contains('.datagrid-scrolling-cells',label).find('input[type="checkbox"]').uncheck({force:true});
    }

    statementObtainTypeDropdown(typ) {
        cy.get('select[name="acquisitionMean"]').select(typ);
    }

    // <-- end od statements section

    setIndividualCustomerData(imie, nazwisko, pesel){
            
            cy.setRadioBtn('Typ klienta','Indywidualny')
            cy.setInputValue('Imię',imie);
            cy.setInputValue('Nazwisko',nazwisko);
            cy.setInputValue('PESEL',pesel);
            cy.get('.ng-star-inserted > c-action > .ng-star-inserted > .btn >').contains('Zapisz').click();
            
            cy.contains('Imię i nazwisko').get('.value').should('contain.text',nazwisko);

            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_NAME').clear();
            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_NAME').type(imie);

            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_SURNAME').clear();
            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_SURNAME').type(nazwisko);
               
            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_PESEL').clear();
            //    cy.get('.clr-control-container > .clr-input-wrapper > #CUSTOMER_PESEL').type(pesel);
            
            //  cy.get('.ng-star-inserted > c-action > .ng-star-inserted > .btn >').contains('Zapisz').click();
            
            }

    setBusinessCustomerData(nazwafirmy, nip, regon, krs){
        
        cy.setRadioBtn('Typ klienta','Biznesowy')
        
        cy.setInputValue('Nazwa firmy',nazwafirmy);
        cy.setInputValue('NIP',nip);
        cy.setInputValue('REGON',regon);
        cy.setInputValue('KRS',krs);
        cy.get('.ng-star-inserted > c-action > .ng-star-inserted > .btn >').contains('Zapisz').click();
        //weryfikacja
        cy.contains('Nazwa firmy').get('.value').should('contain.text',nazwafirmy);
        cy.contains('NIP').get('.value').should('contain.text',nip);
        cy.contains('REGON').get('.value').should('contain.text',regon);
        cy.contains('KRS').get('.value').should('contain.text',krs);
        //cy.get('.box-element > .box-content > .value').click()
     
        
        }            
           
    generateNumber(){
        var nr = Math.floor((Math.random() * 99) + 1);
        return String(nr);
    }

    setContactData(email, telefon){
        cy.setInputValue('Adres e-mail',email);
        cy.setInputValue('Numer telefonu',telefon);
        cy.get('.btn >').contains('Zapisz').click();
        // verify after save
        cy.wait(500);
        cy.get('.box-content span.labeled').contains('E-mail:').next().should('contain.text',email);
        cy.get('.box-content span.labeled').contains('Nr telefonu:').next().should('contain.text',telefon);
    }

    getInvoice(kds,okresbilingowy,datawystawienia,datasprzedazy){
        cy.contains('Fakturuj').click();
        cy.get('select[name="serviceAccountUid"]').select(kds);
        cy.get('select[name="billingCycle"]').select(okresbilingowy);
        cy.get('#issueDate').clear();
        cy.get('#issueDate').type(datawystawienia);
        cy.get('#salesDate').clear();
        cy.get('#salesDate').type(datasprzedazy);
        cy.get('button').contains('Wystaw fakturę').should('contain.text','Wystaw fakturę').click();
        cy.verify('Szczegóły faktury');
    }

    checkCustomerNumber(){
        cy.get('body').then(()=>{
            cy.get('span.number').should('contain.text', nrKlienta)
        })
    }

    setCustomerTag(tagname){
        this.editSection('Etykiety');
        cy.get('input[role="combobox"]').type(tagname).wait(10).type('{enter}');
        cy.get('.label').find('span').first().click({ force: true });
        cy.get('.modal-title').click();
    
        cy.contains('.btn','Zapisz').wait(500).click({force:true});
    }
    
    clearCustomerTag(){
        
        this.editSection('Etykiety');
        cy.get('input[role="combobox"]').type('{backspace}{backspace}{backspace}{backspace}{backspace}').wait(10);
        cy.get('.modal-title').click();
        cy.contains('.btn','Zapisz').wait(500).click();
        //strasznie wqrwiająca kontrolka - będzie zmieniana
    };

    checkDisplayedTags(tagname){
        cy.get('sort-cd-tags').should('contain.text',tagname);
    }


    setAllStatement(){
        cy.get('.datagrid-column-title > .clr-checkbox-wrapper > .clr-control-label').click();
    }
}