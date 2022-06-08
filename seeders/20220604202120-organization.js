'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
     await queryInterface.bulkInsert('Organizations', [{
      id: 1,
      instagramUrl: 'https://www.instagram.com/SomosMás',
      facebookUrl: 'https://www.facebook.com/Somos_Más',
      linkedinUrl: '',
      updatedAt: new Date(),
    }], {});

  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
}
