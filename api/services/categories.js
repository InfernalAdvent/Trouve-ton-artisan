const { Categorie } = require('../models');

const getAllCategories = async () => {
  return await Categorie.findAll({
    attributes: ['nom']
  });
};

module.exports = {
  getAllCategories
};