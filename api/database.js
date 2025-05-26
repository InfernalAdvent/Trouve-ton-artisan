const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,  
    port: process.env.DB_PORT,  
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch(err => console.error('Erreur de connexion :', err));

module.exports = sequelize;