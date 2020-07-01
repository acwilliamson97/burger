const express = require("express");
const burgers = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burgers.all((burgers) => {
        const templateData = { burgers: burgers };

        res.render("index", templateData);
    });
});

router.post("/api/burgers", (req, res) => {
    const newBurgerData = req.body.burger_name;

    burgers.create(newBurgerData, () => {
        const SEE_OTHER = 303;
        res.redirect(SEE_OTHER, "/");
    })
});

router.patch("/api/burgers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)){
        return res.sendStatus(404);
    }
    
    burgers.markDevoured(req.params.id, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end(); 
        }
        res.status(200).end();
    });
});

module.exports = router;