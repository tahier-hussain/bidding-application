const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const DreamTeamSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  match_id: {
    type: String,
    required: true
  },
  total_amount: {
    type: String,
    required: true
  },
  bidding_price: {
    type: String,
    required: true
  },
  total_ratings: {
    type: String,
    default: 0
  },
  total_amount_won: {
    type: String,
    default: 0
  },
  player_1: {
    type: Object
  },
  player_2: {
    type: Object
  },
  player_3: {
    type: Object
  },
  player_4: {
    type: Object
  },
  player_5: {
    type: Object
  },
  player_6: {
    type: Object
  },
  player_7: {
    type: Object
  },
  player_8: {
    type: Object
  },
  player_9: {
    type: Object
  },
  player_10: {
    type: Object
  },
  player_11: {
    type: Object
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DreamTeam = mongoose.model("dream-team", DreamTeamSchema);
