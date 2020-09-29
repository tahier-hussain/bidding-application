//Model
const Admin = require("../models/admin");
const Team = require("../models/team");

exports.create = (req, res) => {
  let file;
  if (req.files.file) {
    file = req.files.file;
    console.log(file.data);
    file.mv(`/home/tahier/Codingmart-tasks/bidding-application/bidding-application-frontend/client/public/${file.name}`);
  }
  console.log(req.files.file);
  console.log(req.body);
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      const newTeam = new Team({
        name: req.body.name,
        sport_id: req.body.sport_id,
        image: file.name
      });

      newTeam
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
  Team.find()
    .sort({ register_date: -1 })
    .then(teams => res.json(teams))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.getNumberOfTeams = (req, res) => {
  Team.find()
    .sort({ register_date: -1 })
    .then(teams => res.json(teams.length))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.update = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Team.findByIdAndUpdate(req.body.id, req.body)
        .then(team => res.json(team))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};

exports.delete = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Team.findByIdAndDelete(req.body.id)
        .then(team => res.json(team))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};
