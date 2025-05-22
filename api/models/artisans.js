const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Artisan = sequelize.define('artisans', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nom: DataTypes.STRING,
  specialite_id: DataTypes.INTEGER,
  Note: DataTypes.DECIMAL(2, 1),
  Ville: DataTypes.STRING,
  A_propos: DataTypes.TEXT,
  Email: DataTypes.STRING,
});

module.exports = Artisan;