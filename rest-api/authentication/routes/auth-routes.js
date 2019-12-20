const router = require('express').Router();

const { register, login } = require('../controllers/auth-controller');

const { hashPassword } = require('../middlewares/hashPassword')
const { validateFields } = require('../middlewares/validateFields')
const { validateEmail } = require('../middlewares/validateEmail')
const { checkExistingEmail } = require('../middlewares/checkExistingEmail')
const { checkExistingUsername } = require('../middlewares/checkExistingUsername')


router.post('/register', validateFields, validateEmail, checkExistingEmail, checkExistingUsername, hashPassword, register);
router.post('/login', validateFields, validateEmail, login)

module.exports = router;
