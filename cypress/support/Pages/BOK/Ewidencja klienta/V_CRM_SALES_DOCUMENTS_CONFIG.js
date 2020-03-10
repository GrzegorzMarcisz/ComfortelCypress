export default class V_CRM_SALES_DOCUMENTS_CONFIG {

    verify() {
        cy.get('h3').contains('Konfiguracja dokumentów sprzedaży').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
        cy.get('.spinner').should('not.exist').wait(2000);
        cy.get('.alert-items').should('not.exist').wait(5000);
    }

    addKDS(name){
        cy.get('.c-actions-items > c-action .btn').contains('Dodaj').click();
        cy.get('.modal-title').should('contain.text','Dodawanie konfiguracji dokumentów sprzedaży');
        cy.get('#PROFILE_NAME').type(name);
        cy.get('#SELLER_NAME select').select('Comfortel Sp. z o.o.');
        cy.get('#CHARGING_CYCLE select').select('Miesięczny');
        cy.get('#PAYMENT_DUE select').select('28 Dzień miesiąca');
        cy.get('#PAYMENT_METHOD select').select('Przelew');
        cy.get('.btn').contains('Zapisz').click();
        cy.get('.c-sds-list-table > .datagrid-compact > .datagrid').should('contain.text',name);
    }
}