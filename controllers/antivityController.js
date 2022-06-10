const updatedb = require("../services/activity");

const createActivity = (req, res) => {};

const getAllActivities = (req, res) => {};

const getOneActivity = (req, res) => {};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const upActivity = await updatedb(req.body, id);
    return res.status(upActivity.id ? 200 : 404).json(upActivity);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteActivity = (req, res) => {};

module.exports = {
  createActivity,
  getAllActivities,
  getOneActivity,
  updateActivity,
  deleteActivity,
};
