const db = require("./../models/");

const getAll = async () => {

    const organizations = await db.Organization.findAll({
        attributes: ["facebookUrl", "instagramUrl", "linkedinUrl"],
    });

    return organizations;
}

module.exports = getAll;