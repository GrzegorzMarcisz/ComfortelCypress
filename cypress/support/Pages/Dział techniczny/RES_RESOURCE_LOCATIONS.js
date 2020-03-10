export default class RES_RESOURCE_LOCATIONS {
    

    verify() {
        cy.verify('Urządzenia w lokalizacjach');
        cy.get('.datagrid-table').should('be.visible');
    } 

    verifyAllResourceList(){
        cy.get('.datagrid-row-scrollable > .datagrid-scrolling-cells > .datagrid-row-actions > .ng-star-inserted > .datagrid-action-toggle > clr-icon').eq(0).click();
        cy.get('.action-item').click();
        cy.get('div > .alert-items').should('not.exist').wait(2000);
    }
// do przeniesienia na nowy page
    verifyResourceDetailPage(){
        cy.get('.datagrid-row-scrollable > .datagrid-scrolling-cells > .datagrid-row-actions > .ng-star-inserted > .datagrid-action-toggle > clr-icon').eq(0).click();
        cy.get('.action-item').eq(1).click();
        cy.get('div > .alert-items').should('not.exist').wait(2000);
        cy.get('.c-sdd-details-v3-section-title').should('contain.text','Szczegóły urządzenia');
        cy.get('.c-sdd-details-v3-section-title').should('contain.text','Atrybuty urządzenia');
        cy.verify('Szczegóły urządzenia');
        cy.get('h3').should('contain.text','Ważność urządzenia');
        cy.get('.btn').should('contain.text','Edytuj');
        cy.get('.c-sdd-details-v3-label-value-table .c-sdd-details-v3-label > c-display-text.ng-star-inserted').should('contain.text','Model');
}

}