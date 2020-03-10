export default class RES_SUPPLIES {

    verify() {
        cy.verify('Dostawy');
        cy.get('.datagrid-table').should('be.visible');
    } 

    addSupply(nazwa,idDostawcy,data,dokumentZakupu,opis){
    cy.get('.btn').contains('Dodaj').click();
    cy.get('.modal-title').should('contain.text','Dodawanie dostawy');
    cy.get('#NAME_ID').type(nazwa);
    cy.get('#SUPPLIER_ID select').select(idDostawcy);
    cy.get('#DATE_ID').type(data);
    cy.get('#PURCHASE_DOCUMENT_ID').type(dokumentZakupu);
    cy.get('#DESCRIPTION_ID').type(opis);
    cy.get('.modal-content .btn').contains('Dodaj').click();
    cy.get('.alert-items').should('contain.text','Dodawanie dostawy zakończone pomyślnie');
    }

    addSupplyExistingName(nazwa,idDostawcy,data,dokumentZakupu,opis){
        cy.get('.btn').contains('Dodaj').click();
        cy.get('.modal-title').should('contain.text','Dodawanie dostawy');
        cy.get('#NAME_ID').type(nazwa);
        cy.get('#SUPPLIER_ID select').select(idDostawcy);
        cy.get('#DATE_ID').type(data);
        cy.get('#PURCHASE_DOCUMENT_ID').type(dokumentZakupu);
        cy.get('#DESCRIPTION_ID').type(opis);
        cy.get('.modal-content .btn').contains('Dodaj').click();
        cy.get('.modal-content .alert-items').should('contain.text','Nazwa nie jest unikatowa');
        }

    addSupplyWithoutFill(){
        cy.get('.btn').contains('Dodaj').click();
        cy.get('.modal-title').should('contain.text','Dodawanie dostawy');
        cy.wait(1000);
        cy.get('.modal-content .btn').contains('Dodaj').click();
        cy.get('.modal-content .alert-items').should('contain.text','Wprowadzono niepoprawne dane');
        }

    generateNumber(){
        var nr = Math.floor((Math.random() * 199) + 1);
        return String(nr);
    }

}