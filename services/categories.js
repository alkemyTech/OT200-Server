const db = require('../models');

const findAll = async() => {
    
    const category = await db.Category.findAll({attributes: 'name'});

    return category;
}

module.exports = {
    findAll
};