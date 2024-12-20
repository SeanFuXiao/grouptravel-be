const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
});

module.exports = mongoose.model("Bill", billSchema);
