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
    .select(
      'recipes.id',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget',
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
  .select('tags.name')
  .where('recipes.id', id)
  .map(i => i.name);

  const categories = await db('recipe_categories')
  .join('recipes', 'recipes.id', 'recipe_categories.recipe_id')
  .join('categories', 'categories.id', 'recipe_categories.category_id')
  .select('categories.name')
  .where('recipes.id', id)
  .map(i => i.name);

  const images = await db('recipe_images')
  .join('recipes', 'recipes.id', 'recipe_images.recipe_id')
  .join('images', 'images.id', 'recipe_images.image_id')
  .select('images.url')
  .where('recipes.id', id)
  .map(i => i.url);

  const instructions = await db('recipe_instructions')
    .join(
      'instructions',
      'instructions.id',
      'recipe_instructions.instruction_id'
    )
    .select('instructions.text', 'instructions.id')
    .where('recipe_instructions.recipe_id', id)
    .orderBy("id")
    .map((ing, i) => {
      delete ing.id;
      return {...ing, step: i + 1 }
    })

  return { ...recipe, tags, categories, images, instructions, ingredients,};
}

async function addRecipeTransaction(body) {
  const transaction = await db.transaction(async trx => {
    try {
      // body.recipes === object
      // body.instructions === array
      // body.tags === array
      // body.recipe_tags === array
      // body.images === array
      // body.ingredients === array
      // body.recipe_ingredients === array
      // body.recipe_categories === array


      // RECIPES
      const [recipe] = await db('recipes').insert(body.recipes).returning("*");

      // INSTRUCTIONS
      const instructions = await db('instructions')
        .insert(body.instructions)
        .returning('*');

      // The reason for the mapping is because you need to have the id's of the added instructions
      // in order to link insert them into the intermediary table

      const recipe_instructions_object = instructions.map(instruction => ({
        instruction_id: instruction.id,
        recipe_id: recipe.id
      }));

      const recipe_instructions = await db('recipe_instructions').insert(
        recipe_instructions_object
      );

      // TAGS
      // The reason why it checks for a tag, is because the user has the ability to add new tags
      // However, if the tags already exists we then expect a recipe_tags object with the provided id's
      if (body.tags) {
        const tags = await trx('tags')
          .insert(body.tags)
          .returning('*');

        const recipe_tags_object = tags.map(tag => ({
          tag_id: tag.id,
          recipe_id: recipe.id
        }));

        const recipe_tags = await trx('recipe_tags').insert(recipe_tags_object);
      } else {
        // The reason for this map is because we need to have the id of the newly created recipe
        const recipe_tags_object = body.recipe_tags.map(tag => {
          return { ...tag, recipe_id: recipe.id };
        });
        const recipes_tags = await trx('tags').insert(recipe_tags_object);
      }

      // IMAGES
      const images = await trx('images')
        .insert(body.images)
        .returning('*');

      const recipe_images_object = images.map(img => ({
        image_id: img.id,
        recipe_id: recipe.id
      }));

      const recipe_images = await trx('recipe_images').insert(
        recipe_images_object
      );

      // INGREDIENTS

      if (body.ingredients) {

        const ingredients = await trx('ingredients')
          .insert(body.ingredients)
          .returning('*');

        const recipe_ingredients_object = ingredients.map((ingredient, index) => {
          return { ...body.recipe_ingredients[index], ingredient_id: ingredient.id, recipe_id: recipe.id };
        });

        const recipe_ingredients = await trx('recipe_ingredients').insert(
          recipe_ingredients_object
        );
      } else {
        const recipe_ingredients_object = body.recipe_ingredients.map(ingredient => {
          return {
            ...ingredient,
            recipe_id: recipe.id
          };
        });

        const recipe_ingredients = await trx('recipe_ingredients').insert(
          recipe_ingredients_object
        );
      }

      // RECIPE CATEGORIES
      // TO BE CHANGED, CATEGORIES SHOULD NOT BE ADDED THIS IS FOR TESTING ONLY
      // SINCE THERE ARE NO SEEDS
      const categories = await trx("categories")
        .insert(body.categories)
        .returning("*")

      const recipe_categories_object = categories.map(category => {
        return {
          category_id: category.id,
          recipe_id: recipe.id
        };
      });

      const recipe_categories = await trx("recipe_categories").insert(recipe_categories_object)

      return recipe.id
    } catch (error) {
      throw error;
    }
  })

  return getRecipeById(transaction)
}
