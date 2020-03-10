export default class CLIENT_DATA_ROOM_NEW_BUS {

    verify() {
        cy.verify('Wprowadź dane klienta dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

    profilSprzedazy(profil) {
        cy.get('select[name="salesProfile"]').select(profil);
    }

    nazwa(_nazwa) {
        cy.get('#COMPANY_NAME').type(_nazwa);
    }

    nip(_nip) {
        cy.get('#NIP').type(_nip);
    }
    
    email(_email){
        cy.get('#email').type(_email);
    }

    telefon(_telefon){
        cy.get('#phone').type(_telefon);
    }
}