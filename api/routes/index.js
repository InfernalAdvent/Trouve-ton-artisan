const express = require('express');
const router = express.Router();

const categorieRoute = require ('../routes/categories')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/categorie', categorieRoute);

module.exports = router;
