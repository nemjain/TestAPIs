var requestPromise = require("request-promise");
var dataManager = require("../data/dataManager.js");

describe('vitamin shopee api validation', function() {
    it('verify customer number in login api', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                console.log("LOGIN ------------------------------>>>MSG:::::BEGIN");
                console.log(loginResponse[0].body) // succeeded...
                console.log("LOGIN ------------------------------>>>MSG:::::END");

                // Validate Response
                expect(loginResponse[0].body.profile.customerCRMNum).toEqual("727187423");

                }).catch(function (err){
                    console.log("LOGIN Validation Failed::");
                    console.log(err);
                    expect(false).not.toBe(false);
                });
        browser.driver.sleep(browser.params.maxApiResponseTime);
        element(by.model('yourName')).sendKeys('Julie');
    });

    it('verify first name in login api', function() {
        console.log('');
        console.log('');
        console.log('verify first name in login api');
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                console.log("LOGIN ------------------------------>>>MSG:::::BEGIN");
                console.log(loginResponse[0].body) // succeeded...
                console.log("LOGIN ------------------------------>>>MSG:::::END");

                // Validate Response
                expect(loginResponse[0].body.profile.firstName).toEqual("Rajesh");

            }).catch(function (err){
            console.log("LOGIN Validation Failed::");
            console.log(err);
            expect(false).not.toBe(false);
        });
        element(by.model('yourName')).sendKeys('Julie');
        browser.driver.sleep(browser.params.maxApiResponseTime);
    });

    it('verify last name in login api', function() {
        console.log('');
        console.log('');
        console.log('verify last name in login api');
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                console.log("LOGIN ------------------------------>>>MSG:::::BEGIN");
                console.log(loginResponse[0].body) // succeeded...
                console.log("LOGIN ------------------------------>>>MSG:::::END");

                // Validate Response
                expect(loginResponse[0].body.profile.lastName).toEqual("Kumar");

            }).catch(function (err){
            console.log("LOGIN Validation Failed::");
            console.log(err);
            expect(false).not.toBe(false);
        });
        element(by.model('yourName')).sendKeys('Julie');
        browser.driver.sleep(browser.params.maxApiResponseTime);
    });

    it('verify postal code not to be null in profile api', function() {
        console.log('');
        console.log('');
        console.log('verify postal code not to be null in profile api');
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                // setting cookies which was received in login response
                dataManager.getOptions(browser.params.profileDetailsFlow[1]).headers['Cookie'] = loginResponse[0].headers['set-cookie'];

                // sending next request in the flow
                Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[1]))])
                    .then(function (profileResponse) {
                        console.log("PROFILE ------------------------------>>>MSG:::::BEGIN");
                        console.log(profileResponse) // succeeded...
                        console.log("PROFILE ------------------------------>>>MSG:::::END");

                        // Validate Response
                        expect(profileResponse[0].detailedProfileResponse.postalCode).not.toBeNull();
                    })
                    .catch(function (err1) {
                        console.log("PROFILE Validation Failed::");
                        console.log(err);
                        expect(false).not.toBe(false);
                    });
            }).catch(function (err){
            console.log("LOGIN Validation Failed::");
            console.log(err);
            expect(false).not.toBe(false);
        });
        element(by.model('yourName')).sendKeys('Julie');
        browser.driver.sleep(browser.params.maxApiResponseTime);
    });

    it('verify email id in profile api', function() {
        console.log('');
        console.log('');
        console.log('verify email id profile api');
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                // setting cookies which was received in login response
                dataManager.getOptions(browser.params.profileDetailsFlow[1]).headers['Cookie'] = loginResponse[0].headers['set-cookie'];

                // sending next request in the flow
                Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[1]))])
                    .then(function (profileResponse) {
                        console.log("PROFILE ------------------------------>>>MSG:::::BEGIN");
                        console.log(profileResponse) // succeeded...
                        console.log("PROFILE ------------------------------>>>MSG:::::END");

                        // Validate Response
                        expect(profileResponse[0].detailedProfileResponse.email).toEqual("certjda01@yopmail.com");
                    })
                    .catch(function (err1) {
                        console.log("PROFILE Validation Failed::");
                        console.log(err);
                        expect(false).not.toBe(false);
                    });
            }).catch(function (err){
            console.log("LOGIN Validation Failed::");
            console.log(err);
            expect(false).not.toBe(false);
        });
        element(by.model('yourName')).sendKeys('Julie');
        browser.driver.sleep(browser.params.maxApiResponseTime);
    });

    it('verify first name in profile api', function() {
        console.log('');
        console.log('');
        console.log('verify first name in profile api');
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));
        Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[0]))])
            .then(function (loginResponse){
                // setting cookies which was received in login response
                dataManager.getOptions(browser.params.profileDetailsFlow[1]).headers['Cookie'] = loginResponse[0].headers['set-cookie'];

                // sending next request in the flow
                Promise.all([requestPromise(dataManager.getOptions(browser.params.profileDetailsFlow[1]))])
                    .then(function (profileResponse) {
                        console.log("PROFILE ------------------------------>>>MSG:::::BEGIN");
                        console.log(profileResponse) // succeeded...
                        console.log("PROFILE ------------------------------>>>MSG:::::END");

                        // Validate Response
                        expect(profileResponse[0].detailedProfileResponse.firstName).toEqual("Rajesh");
                    })
                    .catch(function (err1) {
                        console.log("PROFILE Validation Failed::");
                        console.log(err);
                        expect(false).not.toBe(false);
                    });
            }).catch(function (err){
            console.log("LOGIN Validation Failed::");
            console.log(err);
            expect(false).not.toBe(false);
        });
        element(by.model('yourName')).sendKeys('Julie');
        browser.driver.sleep(browser.params.maxApiResponseTime);
    });
});