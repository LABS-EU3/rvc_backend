const router = require('express').Router();

const {
    getLikedRecipesByUserId,
    postLikeRecipe,
    deleteLike
} = require('../controllers/likes-controllers');

const { checkRequired } = require('../middlewares/checkRequired');

router.get('/:id', getLikedRecipesByUserId);
router.post('/', checkRequired, postLikeRecipe);
router.delete('/', checkRequired, deleteLike);



module.exports = router;