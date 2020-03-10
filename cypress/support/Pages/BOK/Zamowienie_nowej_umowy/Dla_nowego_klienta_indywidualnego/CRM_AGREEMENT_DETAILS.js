var nrKlienta ='';

export default class CRM_AGREEMENT_DETAILS {

    verify() {
        cy.verify('Umowa');
     }
    
    contractApproval(){
        cy.contains('Zatwierdź umowę').click();
        cy.contains('Zapisz').click();
    }

    gotoCustomerPage(){
        cy.contains('Przejdź do klienta').click();
    }

    getCustomerNumber(){
    cy.contains('c-display-group', 'Nr klienta').next().then((nrKlientatxt)=>{
        nrKlienta = nrKlientatxt;
        cy.log(nrKlienta);
    })
    }


}
