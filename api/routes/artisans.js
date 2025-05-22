const express = require('express');
const router = express.Router();
const Artisan = require('../models/artisans');

router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des artisans', error });
  }
});

module.exports = router;