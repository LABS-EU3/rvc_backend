const router = require('express').Router();

const {
  getAllProfiles,
  getProfileByUserId,
  createProfile,
  editProfile,
} = require('../controllers/profile-info-controllers');
const {
  validateProfileDetails,
} = require('../middlewares/validateProfileDetails');
const {
  validateToken,
} = require('../../authentication/middlewares/validateToken');
const { checkProfileExists } = require('../middlewares/checkProfileExists');

router.get('/all', validateToken, getAllProfiles);
router.get('/', validateToken, getProfileByUserId);
router.post(
  '/',
  validateToken,
  checkProfileExists,
  validateProfileDetails,
  createProfile
);
router.put(
  '/',
  validateToken,
  checkProfileExists,
  validateProfileDetails,
  editProfile
);

module.exports = router;
