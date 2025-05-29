const express = require('express');
const router = express.Router();
const artisansController = require('../controllers/artisansController');

router.get('/top', artisansController.getTopArtisans);
router.get('/search', artisansController.searchArtisansByName);
router.post('/:id/contact', artisansController.contactArtisan);
router.get('/:id', artisansController.getArtisanById);



module.exports = router;