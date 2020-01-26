const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  addRecipe,
  addImageToRecipe,
  updateIngredientByRecipeId,
  addIngredientToRecipe,
  removeIngredientFromRecipe
} = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/validateID');
const { requiredFields } = require('../middlewares/requiredFields');
const { emptyFields } = require('../middlewares/emptyFields'); // Has to be disabled until frontend supports all of the features
const {
  validateToken
} = require('../../authentication/middlewares/validateToken');

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById);
router.post('/', validateToken, requiredFields, addRecipe);
router.post('/:id/image', /* validateToken, */ validateId, addImageToRecipe);
router.put('/:id/ingredient', /* validateToken, */ validateId, updateIngredientByRecipeId);
router.post('/:id/ingredient', /* validateToken, */ validateId, addIngredientToRecipe);
router.delete('/:id/ingredient', /* validateToken, */ validateId, removeIngredientFromRecipe);
// A note about validation: We shall want to make sure that users can only modify their _own_ recipes' images, ingredients, etc.!

module.exports = router;
