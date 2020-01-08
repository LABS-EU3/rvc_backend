const db = require('../../../database/dbConfig');

async function checkExistingUsername(req, res, next) {
  const username = req.body.username;

  try {
    const userExists = await db('users')
      .select('username')
      .where({ username });
    if (!!userExists.length) {
      res.status(400).json({ error: `Username ${username} is already in use` });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Something went wrong, please try again later'
    });
  }
}

module.exports = { checkExistingUsername };
