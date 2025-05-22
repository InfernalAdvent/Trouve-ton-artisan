const artisanService = require('../services/artisans');

const getArtisansByCategorie = async (req, res) => {
  const categorieId = req.params.id;

  try {
    const artisans = await artisanService.findArtisansByCategorie(categorieId);
    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = {
  getArtisansByCategorie
};