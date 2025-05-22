const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Categorie = sequelize.define('catégories', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: DataTypes.STRING,
});

module.exports = Categorie;