'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Organizations', {
      facebookUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instagramUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkedinUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Organizations');
  }
};
