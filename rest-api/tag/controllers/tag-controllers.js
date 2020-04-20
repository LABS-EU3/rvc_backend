const db = require('../models/tag-models');

module.exports = {
  getTags,
  editTag,
};

async function getTags(req, res) {
  try {
    const tags = await db.findAllTags();
    if (tags.length) {
      res.status(200).json(tags);
    } else {
      res.status(404).json({ message: 'There are no saved tags' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved tags',
      error,
    });
  }
}

async function editTag(req, res) {
  const { id } = req.params;
  try {
    const editTheTag = await db.editTag(id, req.body);
    res.status(200).json(editTheTag);
  } catch (error) {
    res.status(500).json({
      message: `update unsuccesful for id ${id}`,
      error,
    });
  }
}
