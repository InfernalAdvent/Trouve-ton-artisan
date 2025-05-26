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

const getTopArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTopArtisans();
    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans du mois :", error);
    res.status(500).json({ error: "Erreur serveur"});
  }
};

const searchArtisansByName = async (req, res) => {
  const nom = req.query.nom || '';
  try {
    const artisans = await artisanService.searchArtisansByName(nom);
    res.json(artisans);
  } catch(err) {
    console.error('Erreur lors de la recherche des artisans :', err);
    res.status(500).json({error: 'Erreur serveur'});
  }
}

const getArtisanById = async (req, res) => {
  const artisanId = req.params.id;
  console.log("ID reçu :", artisanId);

  try {
    const artisan = await artisanService.getArtisanById(artisanId);
    console.log("Résultat trouvé :", artisan);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }
    res.status(200).json(artisan);
  } catch (err) {
    console.error("Erreur serveur :", err);
    res.status(500).json({ error: 'Erreur serveur', err });
  }
};

module.exports = {
  getArtisansByCategorie,
  getTopArtisans,
  searchArtisansByName,
  getArtisanById
};