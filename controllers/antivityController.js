const db = require("../models");
const Activity = db.activity;

const createActivity = (req, res) => {};

const getAllActivities = (req, res) => {};

const getOneActivity = (req, res) => {};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const verify = await Activity.findOne({
    where: {
      id: id,
    },
  });
  if (!verify) {
    return res.json({ success: false, message: "The user isn't in database" });
  } else {
    const activity = await Activity.update(
      {
        name: req.body.name,
        content: req.body.content,
        image: req.body.image,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json(activity);
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
