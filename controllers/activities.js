const create = require('../services/activity');

const createActivity = async (req, res) => {

    const activityBody = req.body;

    const name = activityBody.name;
    const content = activityBody.content;

    try {
        
        const activity = await create(name, content);

        res.status(201).json(activity);

    } catch (error) {
        res.status(500).json({ message: "Ha ocurrido un problema al crear la nueva actividad" })
        console.log(error)
    }
}

module.exports = {
    createActivity
};