const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trouve ton artisan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false,
  }
});

sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch(err => console.error('Erreur de connexion :', err));

module.exports = sequelize;