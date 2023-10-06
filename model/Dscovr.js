const mongoose = require("mongoose");

const DscoverSchema = new mongoose.Schema({
    timestamps: {
        type: String,
        required: true
    },
    records: {
        type: Object,
        required: true,

    }
});
module.exports = mongoose.model("Dscovr", DscoverSchema);