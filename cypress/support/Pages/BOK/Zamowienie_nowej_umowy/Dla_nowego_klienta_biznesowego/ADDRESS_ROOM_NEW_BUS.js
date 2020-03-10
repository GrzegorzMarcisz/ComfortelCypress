export default class ADDRESS_ROOM_NEW_BUS {

    verify() {
        cy.verify('Wybierz adres instalacji dla zamówienia');
        cy.get('div > .c-address-input').should('be.visible');
    } 

    addressSearch(adres) {
        cy.get('input[type="text"]').type(adres);
        cy.get('div[role="option"]').contains(adres).click();
        cy.wait(2000);
    }

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }
    
}