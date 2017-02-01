var data = require("./dhakaDivision.json");
var _ = require("lodash");

var postCode = function (postCode) {
    var index = _.findIndex(data,{"pc":parseInt(postCode)});
    return {
        district : data[index].district,
        thana : data[index].thana,
        subOffice:data[index].subOffice
    };
}

var info = function(district,thana,subOffice){
    var index = _.findIndex(data,{"district":district+" ","thana":thana+" ","subOffice":subOffice+" "});
    return data[index].pc;;
}

module.exports = {
	info : info,
    postCode:postCode
};