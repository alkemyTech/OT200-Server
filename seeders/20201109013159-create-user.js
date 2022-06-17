"use strict";

const demoUsers = require("../helpers/usersInfo");
const bcrypt = require("bcrypt");
async function encripted(user) {
  const hash = await bcrypt.hash(user.password, 10);
  return hash;
}
demoUsers.forEach((user) => {
  user.password = encripted(user);
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", demoUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
