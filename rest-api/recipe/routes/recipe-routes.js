const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  addRecipe
} = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/validateID');
const { requiredFields } = require('../middlewares/requiredFields');
const { emptyFields } = require('../middlewares/emptyFields');
const { validateToken } = require("../../authentication/middlewares/validateToken");

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById);
router.post('/', validateToken, requiredFields, emptyFields, addRecipe);

module.exports = router;
