
var y;

describe('Testy salda klienta i wystawionych faktur', function () {

    it('Test salda klienta', function() {
    //cy.login();

    //cy.visit('http://192.168.1.21:7580/?INVOICE_UID=80f8dacc-1675-49ec-a696-009784f7432f&VIEW=V_FIN_INVOICE_DETAILS');
    cy.wait(1000);
    cy.visit('http://192.168.1.21:7580/?CUSTOMER_UID=63b6434e-3ab4-436b-b281-a0e49ea44af9&VIEW=V_CUSTOMER_DETAILS');
    //cy.verify('Szczegóły faktury');
    
            cy.contains('.btn','Wystaw fakturę').
            cy.log(nrklienta);
            // expect(nrklienta.trim()).equal('122');
            })
    });

    insertCurrentDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
        dd = '0' + dd;
        } 
        if (mm < 10) {
        mm = '0' + mm;
        } 
        var today = dd + '-' + mm + '-' + yyyy;
        document.write(today);
    }

    // Oczyt nr klienta z ekranu umowy
    // http://10.10.210.14:9580/?CONTRACT_UID=3e43f39c-683a-495f-b5d0-21ea0432fd26&VIEW=V_CRM_AGREEMENT_DETAILS
    

    // it('Test salda klienta', function () {
    //     cy.login();

    //     cy.visit('http://192.168.1.21:7580/?PURCHASE_ORDER_UID=48af51d5-c71e-4f63-9a4c-b552e122436d&VIEW=SUMMARY_ROOM_NEW_IND');
    //     //cy.verify('Szczegóły faktury');
    //     cy.wait(1000);
    //     //cy.get('.pagination-description').should('contain.text','Wszystkie');
    //     //cy.get('').contains('Nr klienta').next('span').should('contain.text','222');

    //     cy.get('h1').invoke('text').then((nrzamstring) => {
    //         cy.log(nrzamstring);
    //         var nrzam = nrzamstring
    //             .replace('Podsumowanie zamówienia ','')
    //         cy.log(nrzam);
    //         y = nrzam
    //     })
    
    //     cy.log('tutaj nie ma')
    //         cy.log(y)

    //     cy.get('h1').then(() => {
    //         cy.log('Tutaj')
    //         cy.log(y)

    //     })

    // });


});