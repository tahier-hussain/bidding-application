//Model
const User = require("../models/user");
const Admin = require("../models/admin");
const DreamTeam = require("../models/dream-team");
const Match = require("../models/match");

exports.create = (req, res) => {
  console.log(req.body);
  User.findById(req.user.id)
    .select("-password")
    .then(() => {
      const newMatch = new DreamTeam({
        user_id: req.user.id,
        match_id: req.body.match_id,
        bidding_price: req.body.bidding_price,
        total_amount: req.body.total_amount,
        player_1: req.body.player_1,
        player_2: req.body.player_2,
        player_3: req.body.player_3,
        player_4: req.body.player_4,
        player_5: req.body.player_5,
        player_6: req.body.player_6,
        player_7: req.body.player_7,
        player_8: req.body.player_8,
        player_9: req.body.player_9,
        player_10: req.body.player_10,
        player_11: req.body.player_11
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
  DreamTeam.find()
    .sort({ register_date: -1 })
    .then(dreamTeam => res.json(dreamTeam))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.results = (req, res) => {
  DreamTeam.find({ user_id: req.user.id }).then(data => res.json(data));
};

exports.generateResults = (req, res) => {
  Match.findById(req.body.id).then(async match => {
    let obj = await {
      match_ended: true,
      sport_id: match.sport_id,
      team_1_id: match.team_1_id,
      team_2_id: match.team_2_id,
      player_1_team_1: {
        name: match.player_1_team_1.name,
        base_price: match.player_1_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_2_team_1: {
        name: match.player_2_team_1.name,
        base_price: match.player_2_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_3_team_1: {
        name: match.player_3_team_1.name,
        base_price: match.player_3_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_4_team_1: {
        name: match.player_4_team_1.name,
        base_price: match.player_4_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_5_team_1: {
        name: match.player_5_team_1.name,
        base_price: match.player_5_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_6_team_1: {
        name: match.player_6_team_1.name,
        base_price: match.player_6_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_7_team_1: {
        name: match.player_7_team_1.name,
        base_price: match.player_7_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_8_team_1: {
        name: match.player_8_team_1.name,
        base_price: match.player_8_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_9_team_1: {
        name: match.player_9_team_1.name,
        base_price: match.player_9_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_10_team_1: {
        name: match.player_10_team_1.name,
        base_price: match.player_10_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_11_team_1: {
        name: match.player_11_team_1.name,
        base_price: match.player_1_team_1.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_1_team_2: {
        name: match.player_1_team_2.name,
        base_price: match.player_1_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_2_team_2: {
        name: match.player_2_team_2.name,
        base_price: match.player_2_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_3_team_2: {
        name: match.player_3_team_2.name,
        base_price: match.player_3_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_4_team_2: {
        name: match.player_4_team_2.name,
        base_price: match.player_4_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_5_team_2: {
        name: match.player_5_team_2.name,
        base_price: match.player_5_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_6_team_2: {
        name: match.player_6_team_2.name,
        base_price: match.player_6_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_7_team_2: {
        name: match.player_7_team_2.name,
        base_price: match.player_7_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_8_team_2: {
        name: match.player_8_team_2.name,
        base_price: match.player_8_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_9_team_2: {
        name: match.player_9_team_2.name,
        base_price: match.player_9_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_10_team_2: {
        name: match.player_10_team_2.name,
        base_price: match.player_10_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      },
      player_11_team_2: {
        name: match.player_11_team_2.name,
        base_price: match.player_1_team_2.base_price,
        runs: Math.floor(Math.random() * 120),
        wickets: Math.floor(Math.random() * 6),
        catches: Math.floor(Math.random() * 1)
      }
    };

    Match.findByIdAndUpdate(req.body.id, obj).then(async data => {
      DreamTeam.find({ match_id: req.body.id }).then(async dreamTeam => {
        console.log(dreamTeam[0]);
        let total_ratings = 0;
        let player_1_runs = await Math.floor(Math.random() * 120);
        let player_1_wickets = await Math.floor(Math.random() * 6);
        let player_1_catches = await Math.floor(Math.random() * 1);

        let player_2_runs = await Math.floor(Math.random() * 120);
        let player_2_wickets = await Math.floor(Math.random() * 6);
        let player_2_catches = await Math.floor(Math.random() * 1);

        let player_3_runs = await Math.floor(Math.random() * 120);
        let player_3_wickets = await Math.floor(Math.random() * 6);
        let player_3_catches = await Math.floor(Math.random() * 1);

        let player_4_runs = await Math.floor(Math.random() * 120);
        let player_4_wickets = await Math.floor(Math.random() * 6);
        let player_4_catches = await Math.floor(Math.random() * 1);

        let player_5_runs = await Math.floor(Math.random() * 120);
        let player_5_wickets = await Math.floor(Math.random() * 6);
        let player_5_catches = await Math.floor(Math.random() * 1);

        let player_6_runs = await Math.floor(Math.random() * 120);
        let player_6_wickets = await Math.floor(Math.random() * 6);
        let player_6_catches = await Math.floor(Math.random() * 1);

        let player_7_runs = await Math.floor(Math.random() * 120);
        let player_7_wickets = await Math.floor(Math.random() * 6);
        let player_7_catches = await Math.floor(Math.random() * 1);

        let player_8_runs = await Math.floor(Math.random() * 120);
        let player_8_wickets = await Math.floor(Math.random() * 6);
        let player_8_catches = await Math.floor(Math.random() * 1);

        let player_9_runs = await Math.floor(Math.random() * 120);
        let player_9_wickets = await Math.floor(Math.random() * 6);
        let player_9_catches = await Math.floor(Math.random() * 1);

        let player_10_runs = await Math.floor(Math.random() * 120);
        let player_10_wickets = await Math.floor(Math.random() * 6);
        let player_10_catches = await Math.floor(Math.random() * 1);

        let player_11_runs = await Math.floor(Math.random() * 120);
        let player_11_wickets = await Math.floor(Math.random() * 6);
        let player_11_catches = await Math.floor(Math.random() * 1);

        total_ratings += (await player_1_runs) * 10;
        total_ratings += (await player_1_wickets) * 50;
        total_ratings += (await player_1_catches) * 30;

        total_ratings += (await player_2_runs) * 10;
        total_ratings += (await player_2_wickets) * 50;
        total_ratings += (await player_2_catches) * 30;

        total_ratings += (await player_3_runs) * 10;
        total_ratings += (await player_3_wickets) * 50;
        total_ratings += (await player_3_catches) * 30;

        total_ratings += (await player_4_runs) * 10;
        total_ratings += (await player_4_wickets) * 50;
        total_ratings += (await player_4_catches) * 30;

        total_ratings += (await player_5_runs) * 10;
        total_ratings += (await player_5_wickets) * 50;
        total_ratings += (await player_5_catches) * 30;

        total_ratings += (await player_6_runs) * 10;
        total_ratings += (await player_6_wickets) * 50;
        total_ratings += (await player_6_catches) * 30;

        total_ratings += (await player_7_runs) * 10;
        total_ratings += (await player_7_wickets) * 50;
        total_ratings += (await player_7_catches) * 30;

        total_ratings += (await player_8_runs) * 10;
        total_ratings += (await player_8_wickets) * 50;
        total_ratings += (await player_8_catches) * 30;

        total_ratings += (await player_9_runs) * 10;
        total_ratings += (await player_9_wickets) * 50;
        total_ratings += (await player_9_catches) * 30;

        total_ratings += (await player_10_runs) * 10;
        total_ratings += (await player_10_wickets) * 50;
        total_ratings += (await player_10_catches) * 30;

        total_ratings += (await player_11_runs) * 10;
        total_ratings += (await player_11_wickets) * 50;
        total_ratings += (await player_11_catches) * 30;

        let total_amount_won = await Math.trunc(parseInt(dreamTeam[0].bidding_price) + parseInt(total_ratings) / 10000);

        let obj = await {
          user_id: dreamTeam[0].user_id,
          match_id: dreamTeam[0].match_id,
          total_amount: dreamTeam[0].total_amount,
          bidding_price: dreamTeam[0].bidding_price,
          total_ratings: total_ratings,
          total_amount_won: total_amount_won,
          player_1: {
            name: dreamTeam[0].player_1,
            runs: player_1_runs,
            wickets: player_1_wickets,
            catches: player_1_catches
          },
          player_2: {
            name: dreamTeam[0].player_2,
            runs: player_2_runs,
            wickets: player_2_wickets,
            catches: player_2_catches
          },
          player_3: {
            name: dreamTeam[0].player_3,
            runs: player_3_runs,
            wickets: player_3_wickets,
            catches: player_3_catches
          },
          player_4: {
            name: dreamTeam[0].player_4,
            runs: player_4_runs,
            wickets: player_4_wickets,
            catches: player_4_catches
          },
          player_5: {
            name: dreamTeam[0].player_5,
            runs: player_5_runs,
            wickets: player_5_wickets,
            catches: player_5_catches
          },
          player_6: {
            name: dreamTeam[0].player_6,
            runs: player_6_runs,
            wickets: player_6_wickets,
            catches: player_6_catches
          },
          player_7: {
            name: dreamTeam[0].player_7,
            runs: player_7_runs,
            wickets: player_7_wickets,
            catches: player_7_catches
          },
          player_8: {
            name: dreamTeam[0].player_8,
            runs: player_8_runs,
            wickets: player_8_wickets,
            catches: player_8_catches
          },
          player_9: {
            name: dreamTeam[0].player_9,
            runs: player_9_runs,
            wickets: player_9_wickets,
            catches: player_9_catches
          },
          player_10: {
            name: dreamTeam[0].player_10,
            runs: player_10_runs,
            wickets: player_10_wickets,
            catches: player_10_catches
          },
          player_11: {
            name: dreamTeam[0].player_11,
            runs: player_11_runs,
            wickets: player_11_wickets,
            catches: player_11_catches
          }
        };
        console.log(dreamTeam[0]._id);
        console.log(obj);
        DreamTeam.findByIdAndUpdate(dreamTeam[0]._id, obj)
          .then(team => res.json(team))
          .catch(() => res.status(400).json({ msg: "Something went wrong" }));
      });
    });
  });
};

exports.update = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(() => {
      DreamTeam.findByIdAndUpdate(req.body.id, req.body)
        .then(dreamTeam => res.json(dreamTeam))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};

exports.delete = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      DreamTeam.findByIdAndDelete(req.body.id)
        .then(dreamTeam => res.json(dreamTeam))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};
