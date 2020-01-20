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
    .leftJoin('users', 'users.id', 'recipes.user_id')
    .leftJoin('likes', 'likes.recipe_id', 'recipes.id')
    .select(
      'users.id',
      'recipes.id',
      'recipes.parent_id',
      'users.username as author',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget',
      'images.url as imageUrl'
    )
    .count('likes.user_id as likes')
    .groupBy('recipes.id', 'users.id', 'images.url');
  return recipes;
}

async function getRecipeById(id) {
  const recipe = await db('recipes')
    .leftJoin('users', 'users.id', 'recipes.user_id')
    .leftJoin('likes', 'likes.recipe_id', 'recipes.id')
    .select(
      'users.id',
      'recipes.id',
      'recipes.parent_id',
      'users.username as author',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget'
    )
    .where('recipes.id', id)
    .count('likes.user_id as likes')
    .groupBy('recipes.id', 'users.id')
    .first();

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
    .orderBy('id')
    .map((ing, i) => {
      delete ing.id;
      return { ...ing, step: i + 1 };
    });

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

  return { ...recipe, tags, categories, images, instructions, ingredients };
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
      const [recipe] = await trx('recipes')
        .insert(body.recipe)
        .returning('*');
      const updatedRecipe = await trx('recipes').update('parent_id', recipe.id);

      // INSTRUCTIONS
      const newInstructions = body.instructions.map(instruction => {
        return { text: instruction };
      });

      const instructions = await trx('instructions')
        .insert(newInstructions)
        .returning('*');

      // The reason for the mapping is because you need to have the id's of the added instructions
      // in order to link insert them into the intermediary table

      const recipe_instructions_object = instructions.map(instruction => {
        return {
          instruction_id: instruction.id,
          recipe_id: recipe.id
        };
      });

      const recipe_instructions = await trx('recipe_instructions').insert(
        recipe_instructions_object
      );

      // TAGS
      // The reason why it checks for a tag, is because the user has the ability to add new tags
      // However, if the tags already exists we then expect a recipe_tags object with the provided id's
      if (body.tags) {
        const newTags = body.tags.map(tag => {
          return { name: tag };
        });

        const tags = await trx('tags')
          .insert(newTags)
          .returning('*');

        const new_recipe_tags = tags.map(tag => ({
          tag_id: tag.id,
          recipe_id: recipe.id
        }));

        if (body.recipe_tags) {
          const recipe_tags_mapped = body.recipe_tags.map(tag => {
            return { tag_id: tag, recipe_id: recipe.id };
          });
          const recipe_tags = await trx('recipe_tags').insert([
            ...recipe_tags_mapped,
            ...new_recipe_tags
          ]);
        } else {
          const recipe_tags = await trx('recipe_tags').insert(new_recipe_tags);
        }
      } else {
        // The reason for this map is because we need to have the id of the newly created recipe
        const recipe_tags_object = body.recipe_tags.map(tag => {
          return { tag_id: tag, recipe_id: recipe.id };
        });
        const recipes_tags = await trx('recipe_tags').insert(
          recipe_tags_object
        );
      }

      // IMAGES
      const newImages = body.images.map(img => {
        return { url: img };
      });
      const images = await trx('images')
        .insert(newImages)
        .returning('*');

      const new_recipe_images = images.map(img => ({
        image_id: img.id,
        recipe_id: recipe.id
      }));

      const recipe_images = await trx('recipe_images').insert(
        new_recipe_images
      );

      // INGREDIENTS

      if (body.ingredients) {
        const newIngredientsMap = body.ingredients.map(ingredient => {
          return { name: ingredient };
        });
        const ingredients = await trx('ingredients')
          .insert(newIngredientsMap)
          .returning('*');

        const existingIngredients = body.recipe_ingredients
          .filter(i => i.ingredient_id)
          .map(ingredient => {
            return {
              ...ingredient,
              recipe_id: recipe.id
            };
          });

        const newIngredients = body.recipe_ingredients
          .filter(i => !i.ingredient_id)
          .map((ingredient, index) => {
            return {
              ...ingredient,
              ingredient_id: ingredients[index].id,
              recipe_id: recipe.id
            };
          });

        const recipe_ingredients = await trx('recipe_ingredients').insert([
          ...existingIngredients,
          ...newIngredients
        ]);
      } else {
        const new_recipe_ingredients = body.recipe_ingredients.map(
          ingredient => {
            return {
              ...ingredient,
              recipe_id: recipe.id
            };
          }
        );

        const recipe_ingredients = await trx('recipe_ingredients').insert(
          new_recipe_ingredients
        );
      }

      // RECIPE CATEGORIES

      const recipe_categories_object = body.recipe_categories.map(category => {
        return {
          category_id: category,
          recipe_id: recipe.id
        };
      });

      const recipe_categories = await trx('recipe_categories').insert(
        recipe_categories_object
      );

      return recipe.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

  return getRecipeById(transaction);
}
