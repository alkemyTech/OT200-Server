const db = require('../models/index');

const updateNewsService = async (id, dataUpdate) => {

    const {name, content, image} = dataUpdate;

    const update = await db.News.update({
        name,content,image
    },{
        where : {id}
    });

    const updateNew = findId(id);

    if(update === 1){
        return updateNew;
    }else{
        return false;
    }

}

module.exports = {updateNewsService};