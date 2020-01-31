const db = require('../../../database/dbConfig');

module.exports = {
  findAllCategories,
  findCategoryBy,
  addCategory,
  editCategory
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

async function editCategory(id, body) {
  const isUpdated = await db('recipe_categories')
    .update('category_id', body.new.category_id)
    .where('recipe_id', id)
    .andWhere('category_id', body.prev.category_id);

  if (isUpdated) {
    return { message: 'Recipe information updated sucessfully.' };
  } else {
    throw { error: 'Recipe information not updated' };
  }
}
