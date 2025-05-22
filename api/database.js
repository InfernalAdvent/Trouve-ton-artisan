const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Trouve ton artisan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connecté à la base de données avec Sequelize'))
  .catch(err => console.error('Erreur de connexion :', err));

module.exports = sequelize;