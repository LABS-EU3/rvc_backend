const db = require('../../../database/dbConfig');

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipeTransaction
};

async function getRecipes() {
  const recipes = await db('recipes')
    .leftJoin('recipe_images', 'recipe_images.recipe_id', 'recipes.id')
    .leftJoin('images', 'images.id', 'recipe_images.image_id')
    .select(
      'recipes.id',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget',
      'images.url as imageUrl'
    );
  return recipes;
}

async function getRecipeById(id) {
  const recipe = await db('recipes')
    .leftJoin('recipe_images', 'recipe_images.recipe_id', 'recipes.id')
    .leftJoin('images', 'images.id', 'recipe_images.image_id')
    .leftJoin('recipe_categories', 'recipe_categories.recipe_id', 'recipes.id')
    .leftJoin('categories', 'categories.id', 'recipe_categories.category_id')
    .select(
      'recipes.id',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget',
      'images.url as image',
      'categories.name as category'
    )
    .where('recipes.id', id)
    .first();

  const ingredients = await db('recipe_ingredients')
    .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .join('units', 'units.id', 'recipe_ingredients.unit_id')
    .select(
      'ingredients.name',
      'recipe_ingredients.quantity',
      'units.name as unit'
    )
    .where('recipes.id', id);

  const tags = await db('recipe_tags')
    .join('recipes', 'recipes.id', 'recipe_tags.recipe_id')
    .join('tags', 'tags.id', 'recipe_tags.tag_id')
    .select('recipes.title', 'tags.name as tag')
    .where('recipes.id', id);

  const instructions = await db('recipe_instructions')
    .join(
      'instructions',
      'instructions.id',
      'recipe_instructions.instruction_id'
    )
    .select('instructions.text', 'instructions.id')
    .where('recipe_instructions.recipe_id', id);

  return { ...recipe, instructions, ingredients, tags, };
}


