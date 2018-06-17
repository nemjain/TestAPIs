exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['../specs/vitaminSpec.js'],

    params:{
        profileDetailsFlow : ['loginOptions','profileOptions']
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: true,
        includeStackTrace: true
    },

    onPrepare : function(){
        var AllureReporter = require('C:\\Users\\nem\\AppData\\Roaming\\npm\\node_modules\\jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultDir: 'C:\\Users\\nem\\WebstormProjects\\TestAPIs\\allureReporter'
        }));
    }
};