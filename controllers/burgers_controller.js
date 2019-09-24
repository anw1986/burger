var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router()

router.get("/", function (req, res) {
    burger.allBurger(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject)
        res.render("index",hbsObject)
    })
    

})

router.post("/api/burger",function(req,res){
    console.log(req.body)
    // res.json(req.body)
    burger.insertBurger(req.body,function(result){
        res.json(result)
    })
})

module.exports = router