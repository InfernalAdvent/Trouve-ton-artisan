const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Categorie = require('./categories');

const Specialite = sequelize.define('spécialités', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: DataTypes.STRING,
  categorie_id: DataTypes.INTEGER
});

Specialite.belongsTo(Categorie, { foreignKey: 'categorie_id' });

module.exports = Specialite;