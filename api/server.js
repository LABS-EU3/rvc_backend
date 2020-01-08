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


// Routes Use
server.use('/api/recipe', recipeRoute);
server.use('/api/user', userRoute);
server.use('/api/auth', authRoute);
server.use('/api/unit', unitRoute);
server.use('/api/category', categoryRoute);
server.use('/api/tag', tagRoute);
server.use('/api/ingredient', ingredientRoute);

server.get('/', (req, res) => {
  res.json('just cook it');
});

module.exports = server;
