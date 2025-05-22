const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  specialite_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false
  },
  Ville: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  A_propos: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  tableName: 'artisans',
  timestamps: false
});

module.exports = Artisan;