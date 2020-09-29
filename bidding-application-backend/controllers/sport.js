//Model
const Admin = require("../models/admin");
const Sport = require("../models/sport");

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
      const newSport = new Sport({
        name: req.body.name,
        image: file.name
      });

      newSport
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
  Sport.find()
    .sort({ register_date: -1 })
    .then(sports => res.json(sports))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.getNumberOfSports = (req, res) => {
  Sport.find()
    .sort({ register_date: -1 })
    .then(sports => res.json(sports.length))
    .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
};

exports.update = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Sport.findByIdAndUpdate(req.body.id, req.body)
        .then(sport => res.json(sport))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};

exports.delete = (req, res) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then(() => {
      Sport.findByIdAndDelete(req.body.id)
        .then(sport => res.json(sport))
        .catch(() => res.json({ status: 400, msg: "Something went wrong" }));
    });
};
