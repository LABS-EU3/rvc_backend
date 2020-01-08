const router = require('express').Router();

const { getTags } = require('../controllers/tag-controllers');

router.get('/', getTags);

module.exports = router;