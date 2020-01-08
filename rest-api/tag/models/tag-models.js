const db = require('../../../database/dbConfig');

module.exports = {
  findAllTags,
  findTagBy,
  addTag
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
