describe("Authorize by bearer token from Heimdall", () => {

    const baseUrl = 'http://192.168.1.21:7580';
    const heimdallurl = 'http://192.168.1.21:7500';
    const clientsecret = 'G24UsTS9D0Bj'; 
    var bearerToken = '';
    // settings for add offer through api
    const UIDzamowienia ='72e3cd17-3311-42b1-a9bf-fcdc321f2707';
    const offerId = '19';
    const offerName = 'PROMO Telewizja Kuchenna V1';
    const serviceStartDate = '2019-09-01T10:11:38Z'
    const serviceStopDate = '9999-12-31T00:00:00Z'

    const _body = {
        "orderUid":`${UIDzamowienia}`,
        "offerId": `${offerId}`,
        "offerName":`${offerName}`,
        "validSince":`${serviceStartDate}`,
        "validUntil": `${serviceStopDate}`,
        "dependentProducts":[]};

it("Getting bearer token from Heimdall", () => {

cy.request('POST', `${heimdallurl}/security/oauth/token?grant_type=password&username=sort&password=sort&client_id=sortbss&client_secret=${clientsecret}`)
//cy.request('POST', 'http://192.168.1.21:7500/security/oauth/token?grant_type=password&username=sort&password=sort&client_id=sortbss&client_secret=G24UsTS9D0Bj')
.then((response) => {
    expect(response.body).to.have.property('access_token')
    //cy.log(response.body.access_token);
    bearerToken = response.body.access_token;
    cy.log(bearerToken);
    })
})

it("Adding defined offer", () => {
    cy.request({
        method:'POST', 
        url: `${baseUrl}/api/sort/crm/order/addOrderItem`,
        headers: {
            'content-type': 'application/json',
            //"Authorization": "bearer 26d096af-f5f6-41bf-9ff7-5db3dc738530"
            'Authorization': 'bearer '+`${bearerToken}`
                },             
    body: _body
})
    .then((response) => {
        expect(response.body).to.have.property('orderUid')
})
})
})