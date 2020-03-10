//  ||================================||
//  ||       ** QA Department **      ||
//  ||    S.Błaszczykiewicz 10/2019   ||
//  ||================================||
//  ||      Testy zasoby logiczne     ||
//  ||================================||

export default class CRM_LOGICAL_RESOURCES_ROOM_NEW_IND {

    verify(){
        cy.verify('Przypisz zasoby logiczne do wybranych urządzeń');
        cy.contains('.btn','Dodaj numer telefonu').should('contain.text','Dodaj numer telefonu');
        }
    
    addPhoneNumber(){
        cy.contains('.btn','Dodaj numer telefonu').should('contain.text','Dodaj numer telefonu').click();
        cy.get('h3').should('contain.text','Wybierz zasób logiczny');
        cy.contains('.btn','Wybierz').wait(500).click();
        cy.contains('.btn',' Zakończ przypisywanie').should('have.class','btn-primary').click();
        }
    
    generateTelNumber(){
        var nrtel = Math.floor(Math.random() * 1000000000);
        return String(nrtel);
    }

}