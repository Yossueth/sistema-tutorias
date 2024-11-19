"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class solicitudes extends Model {
    static associate(models) {
      this.belongsTo(models.Cursos, { foreignKey: "cursos_id" });
    }
  }
  solicitudes.init(
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_solicitud: {
        type: DataTypes.Date,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "solicitudes",
    }
  );
  return solicitudes;
};
