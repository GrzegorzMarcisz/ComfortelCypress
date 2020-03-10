export default class CRM_ISSUE_DATA_ROOM_NEW_IND {

    verify() {
        cy.verify('Wprowadź dane zlecenia dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

    typeDropdown(typ) {
        cy.get('select[name="type"]').select(typ);
    }

}