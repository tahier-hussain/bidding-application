const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const MatchSchema = new Schema({
  match_ended: {
    type: Boolean,
    default: false
  },
  sport_id: {
    type: String,
    required: true
  },
  team_1_id: {
    type: String,
    required: true
  },
  team_2_id: {
    type: String,
    required: true
  },
  player_1_team_1: {
    type: Object
  },
  player_2_team_1: {
    type: Object
  },
  player_3_team_1: {
    type: Object
  },
  player_4_team_1: {
    type: Object
  },
  player_5_team_1: {
    type: Object
  },
  player_6_team_1: {
    type: Object
  },
  player_7_team_1: {
    type: Object
  },
  player_8_team_1: {
    type: Object
  },
  player_9_team_1: {
    type: Object
  },
  player_10_team_1: {
    type: Object
  },
  player_11_team_1: {
    type: Object
  },
  player_1_team_2: {
    type: Object
  },
  player_2_team_2: {
    type: Object
  },
  player_3_team_2: {
    type: Object
  },
  player_4_team_2: {
    type: Object
  },
  player_5_team_2: {
    type: Object
  },
  player_6_team_2: {
    type: Object
  },
  player_7_team_2: {
    type: Object
  },
  player_8_team_2: {
    type: Object
  },
  player_9_team_2: {
    type: Object
  },
  player_10_team_2: {
    type: Object
  },
  player_11_team_2: {
    type: Object
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Match = mongoose.model("match", MatchSchema);
