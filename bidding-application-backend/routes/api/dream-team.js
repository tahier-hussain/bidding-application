const express = require("express");
const router = express.Router();
const dreamTeamController = require("../../controllers/dream-team");
const auth = require("../../middleware/auth");

router.post("/add", auth, dreamTeamController.create);

router.get("/get", dreamTeamController.get);

router.post("/generate-results", auth, dreamTeamController.generateResults);

router.post("/results", auth, dreamTeamController.results);

router.post("/update", auth, dreamTeamController.update);

router.post("/delete", auth, dreamTeamController.delete);

module.exports = router;
