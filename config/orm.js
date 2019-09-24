// import connection
var connetion = require("../config/connection.js")

var orm = {
    selectAll: function (tableInput, cb) {
        var sqlString = "SELECT * FROM burgers_db." + tableInput + ";"
        connetion.query(sqlString, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: function (tableInput, burgerObj, cb) {
        // console.log(BurgerName);
        // var sqlString = "INSERT INTO " + tableInput + " (" + colName + ") VALUES ?";
        var x="INSERT INTO "+tableInput+" SET ?"
        connetion.query(x, burgerObj, function (err, result) {
            console.log(x)
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm