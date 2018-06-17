var callOptions = require("./callOptions.js");

var dataManager = function () {
    this.getOptions = function (value) {
        if(value == 'loginOptions'){
            return callOptions.loginOptions;
        }else
        if(value == 'profileOptions'){
            return callOptions.profileOptions;
        }
    }
};

module.exports = new dataManager();