require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const indexRouter = require('./routes/index');
const categorieRouter = require('./routes/categories');
const artisanRouter = require ('./routes/artisans');
const allowedOrigins = ['http://localhost:5173'];

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = "Cette origine n'est pas autorisée par CORS";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.use('/', indexRouter);
app.use('/categories', categorieRouter);
app.use('/artisans', artisanRouter)

app.listen(PORT, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

module.exports = app;
