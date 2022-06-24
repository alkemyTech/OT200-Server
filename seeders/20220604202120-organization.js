'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
     await queryInterface.bulkInsert('Organizations', [{
      id: 1,
      name: "Fundacion Cimientos",
      image: "logo-cimientos.png",
      email: "cimientos@cimientos.com",
      welcomeText: "Hola Mundo!",
      instagramUrl: 'https://www.instagram.com/SomosMás',
      facebookUrl: 'https://www.facebook.com/Somos_Más',
      linkedinUrl: 'https://www.linkedin.com/Cimientos',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
}
