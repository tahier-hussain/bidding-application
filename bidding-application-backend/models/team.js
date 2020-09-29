const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sport_id: {
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

module.exports = Team = mongoose.model("team", TeamSchema);
