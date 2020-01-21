const router = require('express').Router();

const {
    getLikedRecipesByUserId,
    postLikeRecipe,
    deleteLike
} = require('../controllers/likes-controllers');

router.get('/:id', getLikedRecipesByUserId);
router.post('/', postLikeRecipe);
router.delete('/', deleteLike);



module.exports = router;