const db = require("./../models/");

const find = async () => {
    
    const members = await db.Member.findAll();

    return members

}

const deleteOne = async (id) => {

    const member =  await db.Member.destroy( { where: { id } } );    

    return member

}

module.exports = {
    find,
    deleteOne
}