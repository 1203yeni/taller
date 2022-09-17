'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  habitacion.init({
    idhabitaciones: DataTypes.INTEGER,
    precio_por_noche: DataTypes.FLOAT,
    piso: DataTypes.STRING,
    max_personas: DataTypes.STRING,
    tiene_cama_base: DataTypes.STRING,
    tiene_ducha: DataTypes.STRING,
    tiene_baño: DataTypes.STRING,
    tiene_balcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'habitacion',
  });
  return habitacion;
};