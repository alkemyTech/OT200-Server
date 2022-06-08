const { findAll, updateData } = require("../services/categories");

const createCategory = (req, res) => {};

const getAllCategories = async (req, res) => {
  try {
    const categories = await findAll();

    res.json(categories);
  } catch (error) {
    res.json(error);
  }
};

const getOneCategory = (req, res) => {};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await updateData(req.body, id);
    return res.status(category.id ? 200 : 404).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCategory = (req, res) => {};

module.exports = {
  createCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
