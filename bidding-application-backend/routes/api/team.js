const express = require("express");
const router = express.Router();
const teamController = require("../../controllers/team");
const auth = require("../../middleware/auth");

router.post("/add", auth, teamController.create);

router.get("/get", teamController.get);

router.get("/get-number-of-teams", auth, teamController.getNumberOfTeams);

router.post("/update", auth, teamController.update);

router.post("/delete", auth, teamController.delete);

module.exports = router;
