import LOGIN from '../../support/Pages/LOGIN';
import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';

describe("Logowanie", () => {

    const validLogin = 'sort';
    const invalidLogin = 'qwer';
    const validPassword = 'sort';
    const invalidPassword = 'qwer';
    const loginPage = new LOGIN;
    const bokHomePage = new BOK_HOME_PAGE;

    beforeEach( () => {
        loginPage.visit();
        loginPage.verify();
    })

    it("Logowanie: brak loginu", () => {

        loginPage.fillPassword(validPassword);
        loginPage.submit();
        loginPage.username().should('be.visible');

    })

    it("Logowanie: brak hasła", () => {

        loginPage.fillUsername(validLogin);
        loginPage.submit();
        loginPage.password().should('be.visible');

    })

    it("Logowanie: nieprawidłowy login", () => {

        loginPage.fillUsername(invalidLogin);
        loginPage.fillPassword(validPassword);
        loginPage.submit();
        loginPage.errorMessage().should('be.visible');

    })

    it("Logowanie: nieprawidłowe hasło", () => {

        loginPage.fillUsername(validLogin);
        loginPage.fillPassword(invalidPassword);
        loginPage.submit();
        loginPage.errorMessage().should('be.visible');

    })

    it("Logowanie: poprawne logowanie", () => {

        loginPage.fillUsername(validLogin);
        loginPage.fillPassword(validPassword);
        loginPage.submit(); 
        bokHomePage.verify();

    })
})