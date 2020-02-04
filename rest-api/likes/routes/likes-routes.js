const router = require('express').Router();

const {
  getLikedRecipesByUserId,
  getLikedRecipesOfUserId,
  postLikeRecipe,
  deleteLike
} = require('../controllers/likes-controllers');

const { checkRequired } = require('../middlewares/checkRequired');
const { validateDataTypeParams } = require('../middlewares/validateDataTypeParams');
const { validateDataTypeBody } = require('../middlewares/validateDataTypeBody');
const { validateToken } = require('../../authentication/middlewares/validateToken');


router.get('/:id', validateToken, validateDataTypeParams, getLikedRecipesByUserId);
router.get('/count/:id', validateToken, validateDataTypeParams, getLikedRecipesOfUserId);
router.post('/', validateToken, validateDataTypeBody, checkRequired, postLikeRecipe);
router.delete('/', validateToken, validateDataTypeBody, checkRequired, deleteLike);

module.exports = router;
