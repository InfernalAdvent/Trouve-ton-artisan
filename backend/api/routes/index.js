const express = require('express');
const router = express.Router();
const artisanRoute = require ('../routes/artisans');
const categorieRoute = require ('../routes/categories');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/categories', categorieRoute);
router.use('/artisans', artisanRoute)

module.exports = router;
