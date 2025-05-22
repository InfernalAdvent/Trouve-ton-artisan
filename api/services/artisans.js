const { Artisan, Specialite, Categorie } = require('../models');

const findArtisansByCategorie = async (categorieId) => {
  return await Artisan.findAll({
    include: [
      {
        model: Specialite,
        required: true,
        include: [
          {
            model: Categorie,
            required: true,
            where: { id: categorieId }
          }
        ]
      }
    ]
  });
};

module.exports = {
  findArtisansByCategorie
};