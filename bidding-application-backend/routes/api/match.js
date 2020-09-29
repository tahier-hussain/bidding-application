const express = require("express");
const router = express.Router();
const matchController = require("../../controllers/match");
const auth = require("../../middleware/auth");

router.post("/add", auth, matchController.create);

router.get("/get", matchController.get);

router.post("/get-single-match", auth, matchController.getSingleMatch);

router.get("/get-number-of-matches", matchController.getNumberOfMatches);

router.post("/update", auth, matchController.update);

router.post("/delete", auth, matchController.delete);

module.exports = router;
