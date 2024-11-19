"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      this.hasMany(models.Usuarios, { foreignKey: "rol_id" });
    }
  }
  roles.init(
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
      modelName: "roles",
    }
  );
  return roles;
};
