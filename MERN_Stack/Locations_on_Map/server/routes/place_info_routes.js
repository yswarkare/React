const express = require("express");
const router = express.Router();
const PlaceInfo = require("../models/Place_Info");

router.get("/place-info/:place_id", async (req, res) => {
    try {
        let placeInfo = await PlaceInfo.findOne({placeId: req.params.place_id});
        return res.status(200).json({ status: true, message: `got place info successfully`, placeInfo: placeInfo})
    } catch (error) {
        return res.status(403).json({ status: false, message: `failed to get place info \n ${error}`, error: {error}});
    }
});

module.exports = router;