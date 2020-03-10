describe('Get UID from individual order by URL v.1.2', function() {

    it("Getting order UID from URL", () => {

            cy.log("Getting params from URL");
            //pobiera aktywny url okna cypress i wyciąga UIDa;
            cy.url().then((activeurl)=>{
                cy.log(activeurl);
                var url = new URL(activeurl);
               var PURCHASE_ORDER_UID = url.searchParams.get("PURCHASE_ORDER_UID");
               console.log(PURCHASE_ORDER_UID);
               cy.log(PURCHASE_ORDER_UID);
               if (PURCHASE_ORDER_UID === null) {cy.log("WARNING! NULL UID !!!")}
            });
             
})
})
