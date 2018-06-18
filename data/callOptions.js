var callOptions = function(){
    this.loginOptions = {
        method: 'POST',
        uri: 'https://redesign.perf.vitaminshoppe.com/rest/model/vitaminshoppe/ca/actor/VSIProfileActor/login',
        body: {
            "email" : "certjda01@yopmail.com",
            "password" : "123456",
            "source": "CA"
        },
        json: true,
        resolveWithFullResponse : true
        //transform: _include_headers,
    };
    this.profileOptions = {
        method: 'GET',
        uri: 'https://redesign.perf.vitaminshoppe.com/rest/model/vitaminshoppe/ca/actor/VSIProfileActor/detailedProfile',
        json: true,
        headers: {
            'User-Agent': 'VitaminShoppe/185-qa Android/okhttp',
            //Cookie: parsedBody[0].headers['set-cookie']
        }
    };
};
module.exports = new callOptions();