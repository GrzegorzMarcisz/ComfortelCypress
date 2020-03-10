describe("Zdarzenia S2E", () => {
it("Zdarzenia S2E - szukanie zdarzeń w JSON SDS", () => {
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log("Start");
const URL = 'http://192.168.1.21:7580/api/sds/records/paged/S2E_ALL_RTRM_EVENT/1/20';
const BODY = '{"aggregatesSettings":{"aggregates":[]},"filterSettings":null,"params":{},"sortSettings":{"items":[]},"columnsSettings":{"columns":[{"name":"EVENT_OCCURRENCE_TIME","required":true},{"name":"EVENT_PRINCIPAL","required":true},{"name":"EVENT_REMOTE_HOST","required":true},{"name":"EVENT_MODULE","required":true},{"name":"EVENT_CATEGORY","required":true},{"name":"EVENT_TYPE","required":true}]}}';

const SDS_COLUMN_DATE = 'EVENT_OCCURRENCE_TIME';
const SDS_COLUMN_UID = 'EVENT_UID';

const TIME_WINDOW = 1000 * 60; //milliseconds

const BEARER = '26d096af-f5f6-41bf-9ff7-5db3dc738530';
const EVENT_DATE = new Date('2019-09-16 13:17:42');
const EVENT_TYPE = 'SUCCESSFUL_LOGIN';

const request = new XMLHttpRequest();
request.open("PUT", URL);
request.setRequestHeader('Accept', 'application/json, text/plain, */*'); 
request.setRequestHeader('Authorization', 'Bearer ' + BEARER);
request.setRequestHeader('Content-Type', 'application/json');
request.send(BODY);
console.log("Zaczynam...");
//cy.log("Start");
request.onreadystatechange=() => {
    const success = request.readyState === 4 && request.status === 200;
    const problem = request.status =! 200;
    if(success) {
        const response = JSON.parse(request.responseText);
        const rows = response.dataSet.rows;
        
        const eventsInWindow = rows.filter(value => {
            const date = new Date(value[SDS_COLUMN_DATE]);
            const diff = date - EVENT_DATE;
            return diff > 0 && diff < TIME_WINDOW;
        }).filter(value => value[EVENT_TYPE])
        //cy.log(eventsInWindow);
        console.log("Prezentuję wyniki");
        console.log(eventsInWindow);
        cy.log(eventsInWindow);
        }
        else if (problem) {console.log("Problem istnieje");}
        else {
            //cy.log("Nie powiodlo się");
            console.log("Problem");

        }

}
})
})