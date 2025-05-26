const categorieService = require('../services/categories');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categorieService.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = {
  getAllCategories
};