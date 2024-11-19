"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Especialidad extends Model {
    static associate(models) {
      this.belongsTo(models.Usuarios, { foreignKey: "usuarios_id" });
    }
  }
  Especialidad.init(
    {
      nombre_especialidad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, // El nombre no puede estar vacío
        },
      },
    },
    {
      sequelize,
      modelName: "Especialidad",
      tableName: "especialidad", // Opcional, en caso de que uses un nombre diferente en la base de datos
      timestamps: true, // Para incluir campos createdAt y updatedAt
    }
  );
  return Especialidad;
};
