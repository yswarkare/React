const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placesSchema = new Schema({
    location: {
        lat: { type: Schema.Types.Decimal128, trim: true },
        lng: { type: Schema.Types.Decimal128, trim: true }
    },
    place: { type: String, trim: true },
    plotId: { type: String, trim: true }
},{
    timestamps: true
});

const Places = mongoose.model("places", placesSchema);

module.exports = Places;