"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "id",
        target_key: "roleId",
      });
      User.hasMany(models.Comment, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photo: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      paranoid: true,
    }
  );

  return User;
};
