'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perfiles.init({
    usuario_id: DataTypes.INTEGER,
    biografia: DataTypes.STRING,
    foto_perfil: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Perfiles',
  });
  return Perfiles;
};