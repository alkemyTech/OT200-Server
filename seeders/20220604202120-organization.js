'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
     await queryInterface.bulkInsert('Organizations', [{
      id: 1,
      name: "Fundacion Somos Más",
      image: "logo-somosmas.png",
      email: "somosfundacionmas@gmail.com",
      phone: "1160112988",
      address: "barrio La Cava",
      welcomeText: "Hola Mundo!",
      instagramUrl: 'https://www.instagram.com/SomosMás',
      facebookUrl: 'https://www.facebook.com/Somos_Más',
      linkedinUrl: 'https://www.linkedin.com/SomosMás',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
}
