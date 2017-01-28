var data = require("./dhakaDivision.json");
var _ = require("lodash");

var info = function(district,thana,subOffice){
    var index = _.findIndex(data,{"district":district+" ","thana":thana+" ","subOffice":subOffice+" "});
    return data[index].pc;;
}
module.exports = {
	info : info,
};