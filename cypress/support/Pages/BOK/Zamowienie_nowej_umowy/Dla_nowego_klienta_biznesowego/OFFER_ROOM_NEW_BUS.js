export default class OFFER_ROOM_NEW_BUS {

    heimdallUrl = Cypress.env('heimdallUrl');
    clientSecret = 'G24UsTS9D0Bj';
    offerId = '23';
    offerName = 'Internet 5G/LTE (150GB, 30 pln/mc, proporcjonalnie) BIZ';
    serviceStartDate = '2019-12-01T10:11:38Z'
    serviceStopDate = '9999-12-31T00:00:00Z'
    entryPoint = Cypress.env('entryPoint');
    bearerToken ='';
    UID = '';

    verify() {
        cy.verify('Wybierz oferty dla zamówienia');
    } 

    addOffer(uid) {

        cy.get(uid).then( (xhr)=> {
            this.UID = xhr.responseBody['PURCHASE_ORDER_UID'];
            cy.request('POST', `${this.heimdallUrl}/security/oauth/token?grant_type=password&username=sort&password=sort&client_id=sortbss&client_secret=${this.clientSecret}`)
                    .then((response) => {
                    expect(response.body).to.have.property('access_token');
                    this.bearerToken = response.body.access_token;
                    cy.request({
                        method:'POST', 
                        url: `${this.entryPoint}/api/sort/crm/order/nb/addOrderItem`,
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'bearer '+`${this.bearerToken}`
                                },             
                        body: {
                            "orderUid":`${this.UID}`,
                            "offerId": `${this.offerId}`,
                            "offerName":`${this.offerName}`,
                            "validSince":`${this.serviceStartDate}`,
                            "validUntil": `${this.serviceStopDate}`,
                            "dependentProducts":[]
                        }

                        
            
                    })
                })
        })
    }

    end() {
        cy.get('button').contains('Zakończ wybieranie ofert').click();
    }

}