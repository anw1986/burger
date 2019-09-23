var connetion=require("../config/connection.js")

var orm={
    name: "Ahmed",
    printName: function(){
        console.log(this.name)
    }
}

module.exports=orm
