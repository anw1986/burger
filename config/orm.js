// import connection
var connetion = require("../config/connection.js")

var orm = {
    selectAll: function (tableInput, cb) {
        var sqlString = "SELECT * FROM burgers_db." + tableInput + ";"
        connetion.query(sqlString,function(err,result){
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm