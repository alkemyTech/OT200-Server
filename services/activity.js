const db = require("../models");
const Activity = db.activity;

 async function updatedb(body,idActivity) {
    const activity = await Activity.update(
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


module.exports = updatedb
