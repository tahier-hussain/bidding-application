const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const SportSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sport = mongoose.model("sport", SportSchema);
