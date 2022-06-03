const db = require('../models');

const createActivity = async (data) => {
    
    const activity = await db.Activity.create(data);

    return activity;
} 

module.export = createActivity;