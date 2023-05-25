const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: String,
    Name: String,
    Password: String,
    DOB: String,
    DOJ: String,
    PanCard: String,
    City: String,
    StateId: { type: mongoose.Schema.Types.ObjectId, ref: "state" },
    cityid: Number,
    ReportingHead: String,
});
const userModel = mongoose.model("user", userSchema);

module.exports = userModel