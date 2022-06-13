const db = require("./../models/");

const dbValidator = async (modelName, id, tokenId) => {

  const model = db[modelName];
  
  if(!model) throw new Error ("Something went wrong");

  const result = await model.findOne( { where: { id, user_id: tokenId } } );

  return result;
  
}

module.exports = dbValidator;