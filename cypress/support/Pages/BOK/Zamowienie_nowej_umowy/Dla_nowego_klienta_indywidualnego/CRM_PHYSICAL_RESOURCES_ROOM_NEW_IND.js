// CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND

//  ||================================||
//  || ** QA Department **            ||
//  || S.Błaszczykiewicz 10/2019      ||
//  ||================================||

export default class CRM_PHYSICAL_RESOURCES_ROOM_NEW_IND {

    addDevice(){
    cy.contains('.btn','Dodaj urządzenie').should('contain.text','Dodaj urządzenie').click();
    cy.get('h3').should('contain.text','Wybierz urządzenie');
    cy.contains('.btn','Wybierz').click();
    cy.contains('.btn',' Zakończ przypisywanie').should('have.class','btn-primary').click();
    }

    verify(){
    cy.verify('Przypisz urządzenia do wybranych usług dla zamówienia');
    cy.contains('.btn','Dodaj urządzenie').should('contain.text','Dodaj urządzenie');
    }
}
