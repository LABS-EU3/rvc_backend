const router = require('express').Router();

const { register, login} = require('../controllers/auth-controller');

const { hashPassword } = require('../middlewares/hashPassword')
const { validateFields } = require('../middlewares/validateFields')
const { validateEmail } = require('../middlewares/validateEmail')



router.post('/register', validateFields, validateEmail, hashPassword, register);
router.post('/login', validateFields, validateEmail, login)

module.exports = router;
