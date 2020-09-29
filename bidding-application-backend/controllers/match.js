//Model
const Admin = require("../models/admin");
const Match = require("../models/match");
const Team = require("../models/team");
const Sport = require("../models/sport");

exports.create = (req, res) => {
  console.log(req.body);
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      const newMatch = new Match({
        sport_id: req.body.sport_id,
        team_1_id: req.body.team_1_id,
        player_1_team_1: {
          name: req.body.player_1_team_1,
          base_price: req.body.player_1_team_1_base_price
        },
        player_2_team_1: {
          name: req.body.player_2_team_1,
          base_price: req.body.player_2_team_1_base_price
        },
        player_3_team_1: {
          name: req.body.player_3_team_1,
          base_price: req.body.player_3_team_1_base_price
        },
        player_4_team_1: {
          name: req.body.player_4_team_1,
          base_price: req.body.player_4_team_1_base_price
        },
        player_5_team_1: {
          name: req.body.player_5_team_1,
          base_price: req.body.player_5_team_1_base_price
        },
        player_6_team_1: {
          name: req.body.player_6_team_1,
          base_price: req.body.player_6_team_1_base_price
        },
        player_7_team_1: {
          name: req.body.player_7_team_1,
          base_price: req.body.player_7_team_1_base_price
        },
        player_8_team_1: {
          name: req.body.player_8_team_1,
          base_price: req.body.player_8_team_1_base_price
        },
        player_9_team_1: {
          name: req.body.player_9_team_1,
          base_price: req.body.player_9_team_1_base_price
        },
        player_10_team_1: {
          name: req.body.player_10_team_1,
          base_price: req.body.player_10_team_1_base_price
        },
        player_11_team_1: {
          name: req.body.player_11_team_1,
          base_price: req.body.player_11_team_1_base_price
        },
        team_2_id: req.body.team_2_id,
        player_1_team_2: {
          name: req.body.player_1_team_2,
          base_price: req.body.player_1_team_2_base_price
        },
        player_2_team_2: {
          name: req.body.player_2_team_2,
          base_price: req.body.player_2_team_2_base_price
        },
        player_3_team_2: {
          name: req.body.player_3_team_2,
          base_price: req.body.player_3_team_2_base_price
        },
        player_4_team_2: {
          name: req.body.player_4_team_2,
          base_price: req.body.player_4_team_2_base_price
        },
        player_5_team_2: {
          name: req.body.player_5_team_2,
          base_price: req.body.player_5_team_2_base_price
        },
        player_6_team_2: {
          name: req.body.player_6_team_2,
          base_price: req.body.player_6_team_2_base_price
        },
        player_7_team_2: {
          name: req.body.player_7_team_2,
          base_price: req.body.player_7_team_2_base_price
        },
        player_8_team_2: {
          name: req.body.player_8_team_2,
          base_price: req.body.player_8_team_2_base_price
        },
        player_9_team_2: {
          name: req.body.player_9_team_2,
          base_price: req.body.player_9_team_2_base_price
        },
        player_10_team_2: {
          name: req.body.player_10_team_2,
          base_price: req.body.player_10_team_2_base_price
        },
        player_11_team_2: {
          name: req.body.player_11_team_2,
          base_price: req.body.player_11_team_2_base_price
        }
      });

      newMatch
        .save()
        .then(data => res.json(data))
        .catch(() =>
          res.json({
            status: 400,
            msg: "Something went wrong"
          })
        );
    });
};

exports.get = (req, res) => {
  Match.find()
    .sort({ register_date: -1 })
    .then(async matches => {
      let output = [];
      let index = 0;
      for (let i = 0; i < matches.length; i++) {
        let obj = {
          _id: matches[i]._id,
          sport_id: matches[i].sport_id,
          sport_name: await Sport.findById(matches[i].sport_id).then(data => {
            return data.name;
          }),
          team_1_id: matches[i].team_1_id,
          team_2_id: matches[i].team_2_id,
          team_1_name: await Team.findById(matches[i].team_1_id).then(data => {
            return data.name;
          }),
          team_2_name: await Team.findById(matches[i].team_2_id).then(data => {
            return data.name;
          }),
          player_1_team_1: matches[i].player_1_team_1,
          player_2_team_1: matches[i].player_2_team_1,
          player_3_team_1: matches[i].player_3_team_1,
          player_4_team_1: matches[i].player_4_team_1,
          player_5_team_1: matches[i].player_5_team_1,
          player_6_team_1: matches[i].player_6_team_1,
          player_7_team_1: matches[i].player_7_team_1,
          player_8_team_1: matches[i].player_8_team_1,
          player_9_team_1: matches[i].player_9_team_1,
          player_10_team_1: matches[i].player_10_team_1,
          player_11_team_1: matches[i].player_11_team_1,
          player_1_team_2: matches[i].player_1_team_2,
          player_2_team_2: matches[i].player_2_team_2,
          player_3_team_2: matches[i].player_3_team_2,
          player_4_team_2: matches[i].player_4_team_2,
          player_5_team_2: matches[i].player_5_team_2,
          player_6_team_2: matches[i].player_6_team_2,
          player_7_team_2: matches[i].player_7_team_2,
          player_8_team_2: matches[i].player_8_team_2,
          player_9_team_2: matches[i].player_9_team_2,
          player_10_team_2: matches[i].player_10_team_2,
          player_11_team_2: matches[i].player_11_team_2
        };
        output[index++] = obj;
      }

      res.json(output);
    })
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.getSingleMatch = (req, res) => {
  Match.findById(req.body.id).then(async match => {
    console.log(match);
    let obj = {
      _id: match._id,
      sport_id: match.sport_id,
      sport_name: await Sport.findById(match.sport_id).then(data => {
        return data.name;
      }),
      team_1_id: match.team_1_id,
      team_2_id: match.team_2_id,
      team_1_name: await Team.findById(match.team_1_id).then(data => {
        return data.name;
      }),
      team_2_name: await Team.findById(match.team_2_id).then(data => {
        return data.name;
      }),
      player_1_team_1: match.player_1_team_1,
      player_2_team_1: match.player_2_team_1,
      player_3_team_1: match.player_3_team_1,
      player_4_team_1: match.player_4_team_1,
      player_5_team_1: match.player_5_team_1,
      player_6_team_1: match.player_6_team_1,
      player_7_team_1: match.player_7_team_1,
      player_8_team_1: match.player_8_team_1,
      player_9_team_1: match.player_9_team_1,
      player_10_team_1: match.player_10_team_1,
      player_11_team_1: match.player_11_team_1,
      player_1_team_2: match.player_1_team_2,
      player_2_team_2: match.player_2_team_2,
      player_3_team_2: match.player_3_team_2,
      player_4_team_2: match.player_4_team_2,
      player_5_team_2: match.player_5_team_2,
      player_6_team_2: match.player_6_team_2,
      player_7_team_2: match.player_7_team_2,
      player_8_team_2: match.player_8_team_2,
      player_9_team_2: match.player_9_team_2,
      player_10_team_2: match.player_10_team_2,
      player_11_team_2: match.player_11_team_2
    };
    res.json(obj);
  });
};

exports.getNumberOfMatches = (req, res) => {
  Match.find()
    .sort({ register_date: -1 })
    .then(matches => res.json(matches.length))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.update = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Match.findByIdAndUpdate(req.body.id, req.body)
        .then(match => res.json(match))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};

exports.delete = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Match.findByIdAndDelete(req.body.id)
        .then(match => res.json(match))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};
