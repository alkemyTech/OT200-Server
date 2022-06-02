const db = require("../models");
const Activity = db.activity;

const createActivity = (req, res) => {};

const getAllActivities = (req, res) => {};

const getOneActivity = (req, res) => {};

const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.update(
      {
        name: req.body.name,
        content: req.body.content,
        image: req.body.image,
      },
      {
        where: {
          id: parseInt(id),
        },
      }
    );
    return res.status(200).json(activity);
  } catch (error) {
    return res.status(404).json(error.message);
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
