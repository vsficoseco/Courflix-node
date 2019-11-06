const express = require("express");
const router = express.Router();
const CoversController = require("../controllers/CoversController");
const CoversInstance = new CoversController();
const EpisodesController = require("../controllers/EpisodesController");
const EpisodesInstance = new EpisodesController();

/* GET home page. */
router.get("/api/covers", (req, res) => {
  CoversInstance.getCovers(req, res);
});
router.get("/episodes", (req, res) => {
  EpisodesInstance.getEpisodes(req, res);
});

module.exports = router;
