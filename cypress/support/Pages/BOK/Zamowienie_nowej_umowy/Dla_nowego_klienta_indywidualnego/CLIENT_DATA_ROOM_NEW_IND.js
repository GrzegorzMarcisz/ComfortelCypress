export default class CLIENT_DATA_ROOM_NEW_IND {

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

    forename(_imie) {
        cy.get('#forename').type(_imie);
    }

    surname(_nazwisko) {
        cy.get('#surname').type(_nazwisko);
    }

    pesel(_pesel) {
        cy.get('#pin').type(_pesel);
    }

    email(_email){
        cy.get('#email').type(_email);
    }

    telefon(_telefon){
        cy.get('#phone').type(_telefon);
    }

    checkConsent(consentId){
        //cy.contains('.datagrid-scrolling-cells',label).find('input[type="checkbox"]').check({force:true});
        cy.get('#'+consentId+' input').check({force: true});
    }
}