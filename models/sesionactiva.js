'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SesionActiva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SesionActiva.init({
    fecha_creacion: DataTypes.DATE,
    fecha_expiracion: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SesionActiva',
  });
  return SesionActiva;
};