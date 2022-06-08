'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.News, {
        as: 'new',
        foreignKey: 'id',
        target_key: 'post_id'
      });
      Comment.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'id',
        target_key: 'user_id'
      });
    
    }
  };
  Comment.init({
    user_id: DataTypes.INTEGER,
    body: DataTypes.STRING,
    post_id: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: true,
    paranoid: true
  });
  return Comment;
};