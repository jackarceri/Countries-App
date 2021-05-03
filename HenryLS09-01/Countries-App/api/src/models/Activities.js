const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activities", {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allownull:false,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min:1,
      max:5

    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
