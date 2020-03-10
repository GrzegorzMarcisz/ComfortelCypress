export default class CRM_ORDER_MODIFICATION_HALL {

    verify() {
        cy.verify('Zmiana stanu zamówienia');
        cy.get('button[title="Przejdź"]').should('be.visible');
    } 

}