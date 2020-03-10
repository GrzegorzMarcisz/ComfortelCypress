export default class SUMMARY_ROOM_NEW_IND {

    verify() {
        cy.verify('Podsumowanie zamówienia');
    } 

    back() {
        cy.get('button').contains('Powrót').click();
    }

}