const db = require("../models/index");
class NewsController {
    async detail(req, res) {        
        await db.News.findByPk(req.params.id).then(news => {
            res.status(200).json({
                data: news
            });
        }).catch(error => {
            res.status(500).json({
                message: 'Error',
                data: error
            });
        });
    }
}

module.exports = NewsController;