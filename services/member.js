const db = require("./../models/");

const find = async () => {
    
    const members = await db.Member.findAll();

    return members

}

module.exports = find