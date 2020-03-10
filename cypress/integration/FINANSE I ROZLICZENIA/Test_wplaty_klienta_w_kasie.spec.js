import CASH_REGISTER from "../../support/Pages/Finanse i rozliczenia/CASH_REGISTER"


describe('Testy wpłat klienta w wybranej kasie', function () {

    const cashRegister = new CASH_REGISTER;
    const CustomerNumber = 333;

    beforeEach(() => {
        cy.login();
        cy.wait(2000);
    })


    it('Test niestandardowej wpłaty klienta w pierwszej kasie z listy', function () {

        cy.visit('?VIEW=CASH_REGISTER')
        cashRegister.chooseFirstCash();
        cashRegister.chooseFirstReport();
        cashRegister.chooseCustomer(CustomerNumber);
        cashRegister.addCustomPayment('niestandardowa', '9,99');
    })

    it('Test niestandardowej wpłaty klienta w wybranej kasie', function () {

        cy.visit('?VIEW=CASH_REGISTER')
        cashRegister.chooseCash('Kasa 2');
        cashRegister.chooseReport('Kasa2/2019/003');
        cashRegister.chooseCustomer(CustomerNumber);
        cashRegister.addCustomPayment('niestandardowa', '9,99');
    })

    it('Test dodania nowego domyślnego raportu w wybranej kasie, a następnie usuniecie go', function () {
        cashRegister.addNewDefaultReport('Kasa 2');
        cashRegister.deleteCurrentReport();
    })

    it('Test próby dodania raportu z przyszłą datą (niedozwolone)', function () {
        cashRegister.addNewCustomInvalidReport('10.12.2019','1999,99','Nie moża utworzyć raportu z przyszłą datą');
    })

    it.only('Test próby dodania raportu z przeszłą datą (niedozwolone)', function () {
        cashRegister.addNewCustomInvalidReport('10.11.2019','1999,99','Raport dla podanego dnia lub następnego już istnieje');
    })

    it('Test wpłaty klienta w wybranej kasie - opłacenie pierwszej faktury na liście', function () {

        cy.visit('?VIEW=CASH_REGISTER')
        cashRegister.chooseCash('Kasa 2');
        cashRegister.chooseReport('Kasa2/2019/001');
        cashRegister.chooseCustomer(CustomerNumber);
        cashRegister.payFirstInvoiceInCash();
    })

    it('Test wpłaty klienta w wybranej kasie - opłacenie wybranej faktury', function () {

        cy.visit('?VIEW=CASH_REGISTER')
        cashRegister.chooseCash('Kasa 2');
        cashRegister.chooseReport('Kasa2/2019/001');
        cashRegister.chooseCustomer(CustomerNumber);
        cashRegister.payTheInvoice('FV/00333/2019/11/0004');
    })

    it.skip('Test usunięcia nowego domyślnego raportu w wybranej kasie', function () {
        cashRegister.deleteReport('kasa', 'raport');
    })

})
