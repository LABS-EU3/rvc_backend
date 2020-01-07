const db = require('../../../database/dbConfig');

module.exports = {
  findAllCategories,
  findCategoryBy,
  addCategory
};

async function findAllCategories() {
  const categories = await db('categories');
  return categories;
}

async function findCategoryBy(info) {
  const category = await db('categories')
    .where({ id: info })
    .orWhere({ name: info });
  return category;
}

async function addCategory(name) {
  const [category] = await db('categories')
    .returning('*')
    .insert(name);
  return category;
}
