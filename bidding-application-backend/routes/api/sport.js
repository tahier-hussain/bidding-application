const express = require("express");
const router = express.Router();
const sportController = require("../../controllers/sport");
const auth = require("../../middleware/auth");

router.post("/add", auth, sportController.create);

router.get("/get", sportController.get);

router.get("/get-number-of-sports", auth, sportController.getNumberOfSports);

router.post("/update", auth, sportController.update);

router.post("/delete", auth, sportController.delete);

module.exports = router;
