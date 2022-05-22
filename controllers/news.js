const db = require("../models/index");
class NewsController {
  async create(req, res) {
    const news = await db.New.create(req.body);
    return res.json({ message: "category", data: news });
  }
  async getALL(req, res) {
    const news = await db.New.findAll({});
    return res.json({ data: news });
  }
}

module.exports = NewsController;
