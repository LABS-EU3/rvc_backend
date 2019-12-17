const router = require('express').Router();

const { register, login} = require('../controllers/auth-controller');

const { hashPassword } = require('../middlewares/hashPassword')
const { validateToken } = require('../middlewares/validateToken')


router.post('/register', hashPassword, register);
router.post('/login', login)

module.exports = router;
