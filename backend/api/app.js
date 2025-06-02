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
const allowedOrigins = [
  'http://localhost:5173',
'https://trouve-ton-artisan-nu.vercel.app'];

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: function (origin, callback) {
    console.log("CORS Origin:", origin);
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  }
}));


app.use('/', indexRouter);
app.use('/categories', categorieRouter);
app.use('/artisans', artisanRouter)

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
