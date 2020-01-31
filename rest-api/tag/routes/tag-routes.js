const router = require('express').Router();

const { getTags, editTag } = require('../controllers/tag-controllers');

router.get('/', getTags);
router.put('/:id', editTag);

module.exports = router;
