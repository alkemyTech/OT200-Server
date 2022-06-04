const db = require("./../models/");

const find = async () => {
    
    const members = await db.Member.findAll();

    return members

}

const findOne = async (id) => {

    const member = await db.Member.findByPk(id);

    if(!member) throw new Error("Member not found");

    return member
}

const deleteOne = async (id) => {

    const member = await findOne(id);

    await member.destroy();    
}

module.exports = {
    find,
    deleteOne
}