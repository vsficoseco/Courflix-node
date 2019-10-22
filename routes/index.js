const express = require("express");
const router = express.Router();
const CoversController = require("../controllers/CoversController");
const CoversInstance = new CoversController();

/* GET home page. */
router.get("/api/covers", (req, res) => {
  CoversInstance.getCovers(req, res);
});
router.get("/carousel/:name", (req, res) =>
  CoversInstance.getCarouselByName(req, res)
);
module.exports = router;
