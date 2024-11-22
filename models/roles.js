"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Roles extends Model {
    static associate(models) {
      this.hasMany(models.Usuarios, { foreignKey: "rol_id" });
    }
  }
  Roles.init(
    {
      admin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profesores: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estudiantes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
