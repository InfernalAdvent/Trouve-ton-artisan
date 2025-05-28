const { Categorie } = require('../models');

const getAllCategories = async () => {
  return await Categorie.findAll({
    attributes: ['id', 'nom']
  });
};

module.exports = {
  getAllCategories
};