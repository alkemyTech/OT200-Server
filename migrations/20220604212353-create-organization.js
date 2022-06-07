'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      welcomeText: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      aboutUsText: {
        type: Sequelize.TEXT,
        allowNull: true
      },
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
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Organizations');
  }
};
