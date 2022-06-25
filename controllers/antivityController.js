const {updatedb, create} = require("../services/activities");

const createActivity = async (req, res) => {

  const activityBody = req.body;

  try {
      
      const activity = await create(activityBody);

      res.status(201).json(activity);

  } catch (error) {
      res.status(500).json({ message: "Ha ocurrido un problema al crear la nueva actividad" })
      console.log(error)
  }
}

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
