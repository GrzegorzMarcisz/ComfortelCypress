export default class CRM_NEW_BUS_ORDER_HALL {
    
    verify() {
        cy.verify('dla nowego klienta biznesowego')
    }

    room(_room) {
        cy.contains(`c-display-text`, `${_room}`).next('.c-sdd-process-action').click();
    }

    create() {
        cy.contains('button', 'Utwórz umowę').click();
    }

}