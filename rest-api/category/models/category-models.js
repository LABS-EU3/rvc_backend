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

async function editCategory(recipe_id, body) { 
  const { name } = body; 
  return await db.transaction( async trx => { 
    try{ 
      const [categories_name] = await trx('categories')
      .where('categories.name', name)
      .select('categories.id');

      const categories_id = categories_name ? categories_name.id : undefined;
      const recipeCategoriesId = await trx('recipes_categories')
      .where('recipes_categories.recipe_id', recipe_id)
      .select('recipe_categories.id')

      const { id } = recipeCategoriesId[index] ? 
      recipeCategoriesId[index] : { id : undefined }
      if (!id ) { throw 'index is out of range!'};
    
      await trx( 'recipe_categories')
      .update('categories_id', categories_id)
      .where( 'id', id)

      return await trx('recipe_categories') 
      .where('recipe_categories.recipe_id', recipe_id)
      .select('categories.name')
    } catch(error) { 
      console.log(error)
      throw(error)
    }
  })
}