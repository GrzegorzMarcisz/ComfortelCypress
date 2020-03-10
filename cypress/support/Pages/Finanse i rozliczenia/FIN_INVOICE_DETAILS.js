let nrFaktury ='';
let nrKlienta ='';

export default class FIN_INVOICE_DETAILS {


    verify() {
        cy.verify('Szczegóły faktury');
        cy.contains('c-display-group', 'Nr klienta').next('c-display-group').invoke('text').then((invnrKlienta) => {
        nrKlienta = invnrKlienta;
        })

        cy.contains('h3','Pozycje faktury');
        cy.get('.pagination-description').should('contain.text','Wszystkie');
    }

    printInvoice(){
        cy.log(nrKlienta);
        cy.contains('.btn','Drukuj fakturę').click();
        cy.get('.alert-text > span').should('contain.text','Faktura została pomyślnie wydrukowana')
    }

    // sprawdza przekazany w wywolaniu metody pattern fragmentu numeracji faktury
    checkCustomerNumberOnInvoice(fvpattern){
        cy.get('body').then(()=>{
            cy.contains('c-display-group', 'Nr faktury').next().should('contain.text', fvpattern+nrKlienta);
        })
    }

    insertCurrentDate(){
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

}