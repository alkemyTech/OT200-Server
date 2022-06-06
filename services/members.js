const db = require("../models");
const Member = db.member;


function creatememberdb(body) {
    const { id, name, facebookUrl, instagramUrl, linkedinUrl, image, description } = body
    const newMember = await Member.create({
        id: id,
        name: name,
        facebookUrl: facebookUrl,
        instagramUrl: instagramUrl,
        linkedinUrl: linkedinUrl,
        image: image,
        description: description,
        createdAt: new Date(),
        updateAt: new Date(),
    })
    return newMember
}


module.exports = creatememberdb
