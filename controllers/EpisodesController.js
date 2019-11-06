const episodes = require("../mock/episodes.json");

class EpisodesController {
  getEpisodes(req, res) {
    res.json({
      episodes: episodes
    });
  }
}
module.exports = EpisodesController;
