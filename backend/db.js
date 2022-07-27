const mongoose = require("mongoose");

// mongodb://localhost:27017/batch_eve

mongoose.connect("mongodb://localhost:27017/batch_eve");

module.exports = mongoose;