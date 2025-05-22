const express = require('express');
const router = express.Router();
const artisansController = require('../controllers/artisansController');
const { getAllCategories } = require('../controllers/categoriesController');

router.get('/:id/artisans', artisansController.getArtisansByCategorie);
router.get('/', getAllCategories);

module.exports = router;