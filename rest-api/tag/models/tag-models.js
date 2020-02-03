const db = require('../../../database/dbConfig');

module.exports = {
  findAllTags,
  findTagBy,
  addTag,
  editTag
};

async function findAllTags() {
  const tags = await db('tags');
  return tags;
}

async function findTagBy(info) {
  const tag = await db('tags')
    .where({ id: info })
    .orWhere({ name: info });
  return tag;
}

async function addTag(name) {
  const [tag] = await db('tags')
    .returning('*')
    .insert(name);
  return tag;
}


async function editTag(id, body) {
  const isUpdated = await db('recipe_tags')
    .update('tag_id', body.new.tag_id)
    .where('recipe_id', id)
    .andWhere('tag_id', body.prev.tag_id);

  if (isUpdated) {
    return { message: 'Recipe information updated sucessfully.' };
  } else {
    throw { error: 'Recipe information not updated' };
  }
}
