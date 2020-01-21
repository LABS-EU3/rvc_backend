const router = require('express').Router();

const {
    getLikedRecipesByUserId,
    postLikeRecipe,
    deleteLike
} = require('../controllers/likes-controllers');

const { checkRequired } = require('../middlewares/checkRequired');
const { validateDataTypeParams } = require('../middlewares/validateDataTypeParams');
const { validateDataTypeBody } = require('../middlewares/validateDataTypeBody');


router.get('/:id', validateDataTypeParams, getLikedRecipesByUserId);
router.post('/', validateDataTypeBody, checkRequired, postLikeRecipe);
router.delete('/', validateDataTypeBody, checkRequired, deleteLike);



module.exports = router;