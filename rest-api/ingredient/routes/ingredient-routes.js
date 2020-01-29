const router = require('express').Router();

const { getIngredients } = require('../controllers/ingredient-controllers');

const { validateId } = require('../../recipe/middlewares/validateID');

router.get('/', getIngredients);
router.put('/:id', /* validateToken, */ validateId, updateIngredientByRecipeId);
router.post('/:id', /* validateToken, */ validateId, addIngredientToRecipe);
router.delete('/:id', /* validateToken, */ validateId, removeIngredientFromRecipe);

module.exports = router;