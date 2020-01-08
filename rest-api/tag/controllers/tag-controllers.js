const db = require('../models/tag-models')

module.exports = {
  getTags
};

async function getTags(req, res) {
  try {
    const tags = await db.findAllTags();
    if (tags.length) {
      res.status(200).json(tags);      
    }
    else {
      res
        .status(404)
        .json({ message: 'There are no saved tags' })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved tags',
        error
      });
  }
}