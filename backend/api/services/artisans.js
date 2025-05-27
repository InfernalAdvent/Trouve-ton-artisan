const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');

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

const getTopArtisans = async () => {
  const artisans = await Artisan.findAll({
    include: [
      {
        model: Specialite,
        attributes: ['nom'],
      }
    ],
    order: [['Note', 'DESC']],
    limit: 3,
    attributes: ['Nom', 'Note', 'Ville']
  });

  return artisans.map(artisan => ({
    Nom: artisan.Nom,
    Note: artisan.Note,
    Specialite: artisan.spécialité.nom,
    Ville: artisan.Ville,
  }));
}

const searchArtisansByName = async (nom) => {
  return await Artisan.findAll({
    where: {
      Nom: {
        [Op.like]: `%${nom}%`
      }
    },
    limit: 10,
  });
}

const getArtisanById = async (artisanId) => {
  return await Artisan.findOne({
    where: { id: artisanId },
    include: [
      {
        model: Specialite,
        include: [Categorie]
      }
    ]
  });
};

module.exports = {
  findArtisansByCategorie,
  getTopArtisans,
  searchArtisansByName,
  getArtisanById
};