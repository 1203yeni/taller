'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idhabitacions: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'habitacions',
          },
          key: 'id'
        },
        allowNull: false
      },
      idhuespedes: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'huespedes',
          },
          key: 'id'
        },
        allowNull: false
      },
      idreservas: {
        type: Sequelize.INTEGER
      },
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('reservas');
  }
};