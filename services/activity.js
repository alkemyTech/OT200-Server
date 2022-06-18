const db = require("../models");

 async function updatedb(body,idActivity) {
    const activity = await db.Activity.update(
        {
            name: body.name,
            content: body.content,
            image: body.image,
        },
        {
            where: {
                id: parseInt(idActivity),
            },
        }
    );
    return activity
}

const create = async (data) => {
    
    const activity = await db.activitiy.create(data);

    return activity;
} 

module.exports = {updatedb, create}
