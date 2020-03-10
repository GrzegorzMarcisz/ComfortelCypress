export default class SYSTEM_BACKEND_COUNTERS {

    verify() {
        cy.verify('Statystyki pracy systemu');
        cy.get('div').contains('Liczniki serwera').should('be.visible');
    } 

}