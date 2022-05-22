const db = require("../models/index");
class CategoryController {
  async create(req, res) {
    const category = await db.Category.create(req.body);
    return res.json({ message: "category", data: category });
  }
  async getALL(req, res) {
    const category = await db.Category.findAll({});
    return res.json({ data: category });
  }
}

module.exports = CategoryController;
