

export default class OFFERS_ROOM_NEW_IND {

    heimdallUrl = Cypress.env('heimdallUrl');
    clientSecret = 'G24UsTS9D0Bj';
    offerId = '40';
    offerName = 'Milenijny Pakiet Geeka 1Tb (2x500Mbps) NET TV TEL';
    serviceStartDate = '2020-01-01T10:11:38Z'
    serviceStopDate = '9999-12-31T00:00:00Z'
    entryPoint = Cypress.env('entryPoint');
    dependentProduct1 = 
           {"productId":39,
           "productName":"Gratis Szampan Bezalkoholowy w Sylwestra",
           "validSince":"2020-01-01T15:20:12Z",
           "validUntil":"9999-12-31T00:00:00Z"};
    dependentProduct2 = 
            {"productId":26,
            "productName":"Instalacja dostępu GPON 1TB (bloki)",
            "validSince":"2020-01-01T15:20:12Z",
            "validUntil":"9999-12-31T00:00:00Z"};
       
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
                        url: `${this.entryPoint}/api/sort/crm/order/ni/addOrderItem`,
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
                            "dependentProducts": [this.dependentProduct1, this.dependentProduct2]
                        }

                        
            
                    })
                })
        })
    }

    end() {
        cy.get('button').contains('Zakończ wybieranie ofert').click();
    }

}