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

module.exports = router