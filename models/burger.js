var orm=require("../config/orm")

var burger={
    allBurger:function(callback){
        orm.selectAll("burgers",function(res){
            callback(res)
        })
    },
    insertBurger:function(burgerObj, callback){
        orm.insertOne("burgers",burgerObj,function(res){
            callback(res)
        })
    }
}

module.exports=burger