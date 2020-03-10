export default class PURCHASE_ORDER_TYPE_HALL {

    verify() {
        cy.verify('Przygotowanie zamówienia');
        cy.get('button[title="Przejdź"]').should('be.visible');
    } 

    newOrder(client) {
        cy.contains(`c-display-text`, `${client}`).next('.c-sdd-process-action').click();
    }

}