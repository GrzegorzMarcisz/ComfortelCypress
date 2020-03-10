// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    const username = 'SB1';
    const password = 'sort';

    cy.visit('/');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button span.ui-button-text.ui-c').contains('Zaloguj').click();
})

Cypress.Commands.add('routeListener', (method, route, uid) => {
    cy.server();
    cy.route(method, route).as(uid);
})

Cypress.Commands.add('verify', (h1) => {
    cy.contains('h1', h1).as('h1')
    cy.get('@h1').should('be.visible');
    //cy.get('.spinner').wait(2000).should('not.exist');
    cy.get('.alert-items').should('not.exist');
})

Cypress.Commands.add('setInputValue', (labelName, inputValue) => {
    //filterInputSetText(labelName, inputSetText){
    cy.contains('clr-input-container', labelName).find('input').clear(inputValue);
    cy.contains('clr-input-container', labelName).find('input').type(inputValue);
})

Cypress.Commands.add('setRadioBtn', (radioName, radioOptionLabel) => {
    cy.contains('clr-radio-container', radioName).find('label').contains(radioOptionLabel).click();
});

Cypress.Commands.add('getSaveParamURL', (urlparam) => {
    // example of params: CONTRACT_UID, CUSTOMER_UID, PURCHASE_ORDER_UID
    //pobiera aktywny url okna cypress i wyciąga np. UIDa;
    let customerUID;
    cy.url().then((activeurl) => {
        let url = new URL(activeurl);
        cy.log(activeurl);
        let param = url.searchParams.get(urlparam);
        cy.wrap(param).as('param')
        if (param === null) { cy.log("WARNING! NULL UID !!!") }
        if (urlparam === "CUSTOMER_UID") { Cypress.env('customerUID',param); } // here you may define new custom param, remember to add it to global variables too
        cy.log("Zapisany "+urlparam+" "+Cypress.env('customerUID'));
    });
});

Cypress.Commands.add('getCustomerUIDfromNumber',(nrklienta) => {
let param;
let customerUID;
cy.get('#search_box').clear().type(nrklienta).type('{enter}');
cy.get('sort-bhp-results .card').click();
cy.get('.number').should('contain.text', nrklienta);
cy.getSaveParamURL('CUSTOMER_UID');
});

Cypress.Commands.add('insertCurrentDate', () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January = 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    } 
    if (mm < 10) {
    mm = '0' + mm;
    } 
    var today = dd + '-' + mm + '-' + yyyy;
    return today.toString();
})

// wywalic jak nie zadziala dnd
Cypress.Commands.add("dragTo", {prevSubject: "element"}, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart");
    cy.get(targetEl).trigger("drop");
    cy.get(targetEl).trigger("dragend");
  });