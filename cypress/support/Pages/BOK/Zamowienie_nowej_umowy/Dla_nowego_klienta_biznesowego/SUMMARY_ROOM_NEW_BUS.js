export default class SUMMARY_ROOM_NEW_BUS {

    verify() {
        cy.verify('Podsumowanie zamówienia');
    } 

    back() {
        cy.get('button').contains('Powrót').click();
    }
    
}