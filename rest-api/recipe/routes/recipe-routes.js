const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  getRecipeByUserId,
  postCloneWithID,
  addRecipe,
  editRecipeInfo,
} = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/validateID');
const { requiredFields } = require('../middlewares/requiredFields');
const {
  validateToken,
} = require('../../authentication/middlewares/validateToken');

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById);
router.get('/user/:id', getRecipeByUserId);
router.post('/:id', validateToken, validateId, postCloneWithID);
router.post('/', validateToken, requiredFields, addRecipe);

router.put('/:id/', editRecipeInfo);
module.exports = router;
