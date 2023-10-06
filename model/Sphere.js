const mongoose = require("mongoose");

const SphereSchema = new mongoose.Schema({
    timestamps: {
        type: String,
        required: true
    },
    records: {
        type: Object,
        required: true,

    }
});
module.exports = mongoose.model("Sphere", SphereSchema);