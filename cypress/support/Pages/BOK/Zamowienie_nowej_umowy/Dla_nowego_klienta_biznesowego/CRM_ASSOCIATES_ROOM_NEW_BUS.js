export default class CRM_ASSOCIATES_ROOM_NEW_BUS {

    verify() {
        cy.verify('Wybierz pełnomocników dla zamówienia');
    }

    addressSearch(adres) {
        cy.get('.ng-input > input').type(adres);
        cy.get('div[role="option"]').contains(adres).click();
        cy.wait(2000);
    }

    forename(_imie) {
        cy.get('#forename0').type(_imie);
    }

    surname(_nazwisko) {
        cy.get('#surname0').type(_nazwisko);
    }

    save() {
        cy.get('button').contains('Zapisz').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

}