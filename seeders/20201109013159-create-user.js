"use strict";

const demoUsers = require("../helpers/usersInfo");
const bcrypt = require("bcrypt");
const newUsers = demoUsers.map((user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return user;
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", newUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
