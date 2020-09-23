const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeInfoSchema = new Schema({
    timestamp: { type: Date, default: Date.now(), trim: true },
    airTemp: { type: Schema.Types.Decimal128, trim: true },
    airHumidity: { type: Schema.Types.Decimal128, trim: true },
    leafWetness: { type: Schema.Types.Decimal128, trim: true },
    lightIntensity: { type: Schema.Types.Decimal128, trim: true },
    place: { type: Schema.Types.ObjectId, ref: "places" },
    plotId: { type: Schema.Types.String, ref: "places" }
},{
    timestamps: true
});

const PlaceInfo = mongoose.model("placeinfo", placeInfoSchema);

module.exports = PlaceInfo;