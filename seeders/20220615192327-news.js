'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('News', [{
      name:"Noticia 1",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 2",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 3",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 4",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 5",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 6",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 7",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 8",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 9",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 10",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 11",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 12",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 13",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Noticia 14",
      content:"texto de noticia",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {  
    await queryInterface.bulkDelete('News', null, {});
  }
};