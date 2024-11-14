'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Valoraciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Valoraciones.init({
    calificacion: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    fecha_valoracion: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Valoraciones',
  });
  return Valoraciones;
};