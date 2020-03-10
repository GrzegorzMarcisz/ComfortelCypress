export default class CUSTOMERS_LIST {

    verify() {
        cy.verify('Klienci');
        cy.get('.datagrid-table').should('be.visible');
    } 

    filterToggle() {
        
        if (cy.get('[hidden]')) {    
            cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr').click();
        }
        else {
        //cy.get('.card-actions > .btn').contains('Pokaż/ukryj filtr');
            }
    }

        filterRadio(radioName,radioOptionLabel){
            this.filterToggle();
            cy.contains('clr-radio-container' , radioName).find('label').contains(radioOptionLabel).click();
            //cy.get('.btn').contains('Filtruj').click(); //tymczasowo
        }

        filterInputSetText(labelName, inputSetText){
            cy.contains('clr-input-container',labelName).find('input').type(inputSetText);
        }
    
        filterBtnFilter(){
            cy.get('.btn').contains("Filtruj").should('contain.text','Filtruj').click();
            cy.wait(500);
        }    
        filterBtnClear(){
            cy.get('.btn').contains("Wyczyść").should('not.be.disabled').click();
        }

        filterSearch(typKlienta, szukajKlienta, adresKlienta, peselKlienta,nipKlienta, oczekiwanyKlient){
            //this.filterToggle();
            this.filterRadio("Typ klienta",typKlienta);
            if (szukajKlienta !== "") {
            this.filterInputSetText('Wyszukaj',szukajKlienta);}
            if (adresKlienta !== "") {
            this.filterInputSetText('Adres',adresKlienta);}
            if (peselKlienta !== "") {
            this.filterInputSetText('PESEL',peselKlienta);}
            if (nipKlienta !== "") {
            this.filterInputSetText('NIP',nipKlienta);}

            this.filterBtnFilter(); // click filtering
            cy.get('.datagrid').should('contain.text',oczekiwanyKlient)
        }

        getCustomerQuantity(){
            
            cy.get('.c-pagination-info').invoke('text').then((txt1)=>{
            cy.get('.c-pagination-info').contains(txt1).should('contains.text','wierszy');
            // wyciagam do zmiennej ilosc wierszy
                var fullText = txt1;
                var pattern1 = /\d{1,3} wierszy/g;
                var wyciete1 = fullText.match(pattern1);
                    var wyciete2 = wyciete1.toString();
                    var pattern2 = /\d{1,3}/g;
                    var wierszyKlientow = wyciete2.match(pattern2);   
            cy.wait(2000);
            cy.log(wierszyKlientow == 0 ? "UWAGA! Zero klientów" : "OK. Lista zawiera"+wierszyKlientow);
            cy.get('.c-pagination-info').should('to.not.equal',0);
            })
        }

        checkCustomerQuantity(typKlienta, expectedCustomers){
            var expectedCustomers;
            // this.filterToggle();  
            this.filterRadio("Typ klienta",typKlienta);
            this.filterBtnFilter();
            cy.wait(1000);
            cy.get('.c-pagination-info').invoke('text').then((txt1)=>{
            cy.get('.c-pagination-info').contains(txt1).should('contains.text','wierszy');
            // wyciagam do zmiennej ilosc wierszy
                var fullText = txt1;
                var pattern1 = /\d{1,3} wierszy/g;
                var wyciete1 = fullText.match(pattern1);
                    var wyciete2 = wyciete1.toString();
                    var pattern2 = /\d{1,3}/g;
                    var wierszyKlientow = wyciete2.match(pattern2);
                         
            
            cy.log(wierszyKlientow == 0 ? "UWAGA! Zero klientów" : "OK. Lista zawiera klientów");
                                
            //expect(wierszyKlientow <= expectedCustomers).to.be.true;
            //cy.log(wierszyKlientow <= expectedCustomers ? "=== Mniej klientów indywidualnych niż zadeklarowano!" : "OK");
            cy.wait(1000);
            expect(parseInt(wierszyKlientow)).to.not.equal(0);

        })
        }
            
        
            
        }
