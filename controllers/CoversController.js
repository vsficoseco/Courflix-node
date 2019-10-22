const covers = require("../mock/covers.json");

class CoverController {
  getCovers(req, res) {
    res.json({
      covers: covers
    });
  }
  getCarouselByName(req, res) {
    const name = req.params.name;
    const arr = [];

    covers.map((data, key) => {
      if (name == data.name) {
        arr.push(data);
      }
    });

    return res.json({
      covers: arr
    });
  }
}
module.exports = CoverController;
