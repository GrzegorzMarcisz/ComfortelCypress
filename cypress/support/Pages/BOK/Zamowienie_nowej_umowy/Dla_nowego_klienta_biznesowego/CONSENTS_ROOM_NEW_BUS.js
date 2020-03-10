export default class CONSENTS_ROOM_NEW_BUS {
    
    verify() {
        cy.verify('Wybierz oświadczenia dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

    sposobPozyskania(sposob) {
        cy.get('select[name="ACQUISITION"]').select(sposob);
    }

    checkConsent(consentId){
        //cy.contains('.datagrid-scrolling-cells',label).find('input[type="checkbox"]').check({force:true});
        cy.get('#'+consentId+' input').check({force: true});
    }

}