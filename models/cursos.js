'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cursos.init({
    nombre_curso: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    solicitud_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};