const db = require("./../models/")

const deleteOne = async (id) => {

   const category =  await db.Categories.destroy( { where: { id } } );    

   return category
}

module.exports = deleteOne