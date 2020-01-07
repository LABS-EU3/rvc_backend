const bcrypt = require('bcryptjs');

function hashPassword(req, res, next) {
  if (req.body && req.body.password) {
    const password = bcrypt.hashSync(req.body.password);
    req.credentials = { ...req.body, password };
    next();
  } else {
    res.status(401).json({ message: 'REQUIRED FIELD "PASSWORD" MISSING' });
  }
}

module.exports = { hashPassword };
