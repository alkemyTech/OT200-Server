"use strict";

const demoUsers = require("../helpers/usersInfo");
const bcrypt = require("bcrypt");
async function encripted(user) {
  user.password = await bcrypt.hash(user.password, 10);
}
const hashedUsers = demoUsers.forEach(encripted);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", hashedUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
