const db = require('../models');

const create = async (data) => {
    
    const activity = await db.Activity.create(data);

    return activity;
} 

module.export = create;