var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.json(result.insertId);
    });
});

router.put("/burgers/:id", function (req, res) {
    var burgerId = req.params.id;
    burger.updateOne("devoured","TRUE", burgerId, function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;