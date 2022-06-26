const db = require('../models');

const create = async (data) => {
    
    const activity = await db.Activity.create(data);

    return activity;
} 

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

module.exports = {create, updatedb};