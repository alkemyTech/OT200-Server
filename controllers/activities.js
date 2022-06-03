const createActivity = require('../services/activities');

const activityController = async (req, res) => {

    const activityBody = req.body;

    const name = activityBody.name;
    const content = activityBody.content;

    try {
        if ((name==="" || name===undefined) || (content==="" || content===undefined)) {
            
            res.status(500).json({message: "Los campos name y content no puede estar vacíos"})

        } else {
            
            const activity = await createActivity(name, content);

            res.status(201).json(activity);

        }
    } catch (error) {
        
    }
}