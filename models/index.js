"use strict";

const fs = require("fs");
const path = require("path");
const sequelize = require(" .. /db/db"); // Usar la conexión existente
const basename = path.basename(filename);
const db = {};

// Cargar todos los modelos automáticamente
fs.readdirSync(_dirname)
  .filter((file) => {
    return (
      file.indexof(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexof(".test.js") - 1
    );
  })
  .forEach((file) => {
    const model = require(path.join(_dirname, file))(sequelize);
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
