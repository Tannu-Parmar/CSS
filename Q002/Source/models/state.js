const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    stateID: Number,
    Name: String,
    City: [{ type: String }],
});

const stateModel = mongoose.model("state", stateSchema);
module.exports = stateModel