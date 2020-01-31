function validateProfileDetails(req, res, next) {
  const { profile_pic, first_name, last_name, bio } = req.body;
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: 'Missing profile details'
    });
  } else if (profile_pic && first_name && last_name && bio) {
    next();
  } else {
    res.status(400).json({
      message: 'Incomplete details'
    });
  }
}

module.exports = { validateProfileDetails };
