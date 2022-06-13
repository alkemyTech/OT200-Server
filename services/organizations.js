const db = require("./../models/");

const getAll = async () => {

    const organizations = await db.Organization.findAll();

    return organizations;
}

module.exports = getAll;