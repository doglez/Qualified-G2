const mongoose = require("mongoose");

const albumSchema = mongoose.Schema({
    performer: String,
    title: String,
    cost: Number,
});
albumSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
});
albumSchema.set("toObject", {
    virtuals: true,
    versionKey: false,
});
const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
