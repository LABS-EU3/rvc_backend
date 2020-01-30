require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes Import
const recipeRoute = require('../rest-api/recipe/routes/recipe-routes');
const userRoute = require('../rest-api/user/routes/user-routes');
const authRoute = require('../rest-api/authentication/routes/auth-routes');
const unitRoute = require('../rest-api/unit/routes/unit-routes');
const categoryRoute = require('../rest-api/category/routes/category-routes');
const tagRoute = require('../rest-api/tag/routes/tag-routes');
const ingredientRoute = require('../rest-api/ingredient/routes/ingredient-routes');
const profileInfoRoute = require('../rest-api/profile-info/routes/profile-info-routes');
const likesRoute = require('../rest-api/likes/routes/likes-routes');
const imagesRoute = require('../rest-api/image/routes/image-routes');



// Routes Use
server.use('/api/recipe', recipeRoute);
server.use('/api/user', userRoute);
server.use('/api/auth', authRoute);
server.use('/api/unit', unitRoute);
server.use('/api/category', categoryRoute);
server.use('/api/tag', tagRoute);
server.use('/api/ingredient', ingredientRoute);
server.use('/api/profile', profileInfoRoute);
server.use('/api/likes/', likesRoute )
server.use('/api/images/', imagesRoute )


server.get('/', (req, res) => {
  res.json('just cook it');
});

server.get('/api/docs', (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/8105818/SWEE1F3V');
});

module.exports = server;
