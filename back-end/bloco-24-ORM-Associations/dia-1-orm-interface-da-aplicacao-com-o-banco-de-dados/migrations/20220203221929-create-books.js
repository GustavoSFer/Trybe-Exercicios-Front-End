'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const Books = queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
       allowNull: false,
       type: Sequelize.STRING
      },
      pageQuantity: {
       allowNull: false,
       type: Sequelize.INTEGER
      },
      createdAt: {
       allowNull: false,
       type: Sequelize.DATE
      },
    });
   },
 
   async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
   }
 };
 