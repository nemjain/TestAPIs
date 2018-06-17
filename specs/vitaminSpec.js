var requestPromise = require("request-promise");
var dataManager = require("../data/dataManager.js");

describe('vitamin shopee api validation', function() {
    it('verify profile api', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                console.log("------------------------------>>>MSG:::::BEGIN");
                console.log(loginResponse[0].body) // succeeded...
                console.log("------------------------------>>>MSG:::::END");

                // Validate Response
                expect(loginResponse[0].body.profile.customerCRMNum).toEqual("727187423");
                expect(loginResponse[0].body.profile.firstName).toEqual("Rajesh");
                expect(loginResponse[0].body.profile.lastName).toEqual("Kumar");

                // setting cookies which was received in login response
                dataManager.getOptions(browser.params.profileDetailsFlow[1]).headers['Cookie'] = loginResponse[0].headers['set-cookie'];

                // sending next request in the flow
                Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[1]))])
                    .then(function (profileResponse) {
                        console.log("------------------------------>>>MSG:::::BEGIN");
                        console.log(profileResponse) // succeeded...
                        console.log("------------------------------>>>MSG:::::END");

                        // Validate Response
                        expect(profileResponse[0].detailedProfileResponse.postalCode).not.toBeNull();
                        expect(profileResponse[0].detailedProfileResponse.email).toEqual("certjda01@yopmail.com");
                        expect(profileResponse[0].detailedProfileResponse.firstName).toEqual("Rajesh");
                        expect(profileResponse[0].detailedProfileResponse.lastName).toEqual("Kumar");
                    })
                    .catch(function (err1) {
                        console.log("PROFILE Validation Failed::");
                        console.log(err);
                        expect(false).not.toBe(true);
                    });
                }).catch(function (err){
                    console.log("LOGIN Validation Failed::");
                    console.log(err);
                    expect(false).not.toBe(true);
                });
                element(by.model('yourName')).sendKeys('Julie');
                //browser.driver.sleep(40000);
    });
});