const jwt = require('jsonwebtoken');

const jwtSecret = process.env.SECRET;

function validateToken(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({
            error: err,
            message: 'The token provided is not valid or has expired'
          });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: 'The token provided is not valid or has expired' });
  }
}

module.exports = { validateToken };
