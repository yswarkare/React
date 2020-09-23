const express = require("express");
const router = express.Router();
const Places = require("../models/Places");

router.get("/get-all", async (req, res) => {
    try {
        let places_01 = await Places.find();
        return res.status(200).json({ status: true, message: "got all data", allPlaces: places_01 });
    } catch (error) {
        console.log({error});
        return res.status(401).json({ sataus: true, message: "failed to get data", error: {error} });
    }
});

module.exports = router;