const Artisan = require('./artisans');
const Specialite = require('./specialites');
const Categorie = require('./categories');

Artisan.belongsTo(Specialite, { foreignKey: 'specialite_id' });
Specialite.belongsTo(Categorie, { foreignKey: 'categorie_id' });

module.exports = {
  Artisan,
  Specialite,
  Categorie
};