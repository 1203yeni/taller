'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idhabitaciones:{
        type: Sequelize.INTEGER
      },
     
      precio_por_noche: {
        type: Sequelize.FLOAT
      },
      piso: {
        type: Sequelize.STRING
      },
      max_personas: {
        type: Sequelize.STRING
      },
      tiene_cama_base: {
        type: Sequelize.STRING
      },
      tiene_ducha: {
        type: Sequelize.STRING
      },
      tiene_baño: {
        type: Sequelize.STRING
      },
      tiene_balcon: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitacions');
  }
};