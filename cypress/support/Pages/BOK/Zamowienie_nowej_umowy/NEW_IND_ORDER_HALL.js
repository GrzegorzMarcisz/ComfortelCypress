export default class NEW_IND_ORDER_HALL {

    verify() {
        cy.verify('dla nowego klienta indywidualnego')
    }

    room(_room) {
        
        cy.contains(`c-display-text`, `${_room}`).next('.c-sdd-process-action').click();
    }

    create() {
        cy.contains('button', 'Utwórz umowę').click();
    }



}