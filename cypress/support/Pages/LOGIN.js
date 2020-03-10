export default class LOGIN{

    USERNAME = '#username';
    PASSWORD = '#password';
    SUBMIT = '#login-form > .submit > .ui-button > .ui-button-text';
    ERROR_MESSAGE = '.ui-messages-error';
    
    
    visit() {
        cy.visit('/');
    }

    username() {
        return cy.get(this.USERNAME);
    }

    password() {
        return cy.get(this.PASSWORD);
    }

    verify() {
        cy.get(this.USERNAME).should('be.visible');
        cy.get(this.PASSWORD).should('be.visible');
        cy.get(this.SUBMIT).should('be.visible');
    }

    errorMessage() {
        return cy.get(this.ERROR_MESSAGE)
    }

    submit() {
        cy.get(this.SUBMIT).click();
    }

    fillUsername(_username) {
        cy.get(this.USERNAME).type(_username);
    }

    fillPassword(_password) {
        cy.get(this.PASSWORD).type(_password);
    }
}