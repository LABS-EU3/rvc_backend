const db = require('../../../database/dbConfig');

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipeTransaction,
  addImageToRecipe,
  updateIngredientByRecipeId,
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
      const updatedRecipe = await trx('recipes')
        .where('recipes.id', recipe.id)
        .update('parent_id', recipe.id);

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

async function addImageToRecipe(body, recipe_id) {
  return await db.transaction(async trx => {
    try {
      const [image_id] = await trx('images')
      .insert(body)
      .returning('id');
      
      await trx('recipe_images')
        .insert({ recipe_id, image_id });
      
      const images = await trx('recipe_images as rI')
        .join('images as i', 'rI.image_id', 'i.id')
        .where('rI.recipe_id', recipe_id)
        .select('i.url');

      const [basicRecipeInfo] = await trx('recipes as r')
        .join('recipe_images as rI', 'r.id', 'rI.recipe_id')
        .where('rI.recipe_id', recipe_id)
        .select(
          'r.id',
          'r.title'
        );

      return ({
        ...basicRecipeInfo,
        images
      });
    } catch (err) {
      console.log(err);
      throw(err);
    }
  });
};

async function updateIngredientByRecipeId(body, recipe_id) {
  // Let's assume _body_ has the following shape:
  /* {
    name: STRING,
    quantity: INT,
    unit_id: INT,
    index: INT
  } */
  // This makes things easy for the frontend.
  // But it means we have to check whether _name_ already exists in the ingredients table!
  // Like so...

  const { name, quantitity, unit_id, index } = body;

  return await db.transaction(async trx => {
    try {
      // Need to check whether _name_ already exists in the 'ingredients' table!
      const [ingredient_idObject] = await trx('ingredients as i')
        .where('i.name', name)
        .select('i.id');

      const ingredient_id = ingredient_idObject ? ingredient_idObject.id : undefined;
      
      // In both cases, _quantity_ and _unit_id_ need to be updated in the 'recipe_ingredients' table.
      const recipeIngredientsIds = await trx('recipe_ingredients as rI')
        .where('rI.recipe_id', recipe_id)
        .select('rI.id');
      const { id } = recipeIngredientsIds[index]; // (The id of the recipe_ingredients row to change!)

      await trx('recipe_ingredients')
        .update('quantity', quantitity)
        .update('unit_id', unit_id)
        .where('id', id);

      if (ingredient_id) {
        // But if _name_ already exists, we simply update _ingredient_id_ in 'recipe_ingredients':
        await trx('recipe_ingredients')
          .update('ingredient_id', ingredient_id)
          .where('id', id);

      } else {
        // Otherwise, need to first add a new ingredient with _name_ to the 'ingredients' table, ...
        const [newIngredientId] = await trx('ingredients')
          .insert({ name })
          .returning('id');

        // ... then update _ingredient_id_ in 'recipe_ingredients':
        await trx('recipe_ingredients')
          .update('ingredient_id', newIngredientId)
          .where('id', id);
      }

      return await trx('recipe_ingredients as rI')
        .join('units as u', 'rI.unit_id', 'u.id')
        .join('ingredients as i', 'rI.ingredient_id', 'i.id')
        .where('rI.recipe_id', recipe_id)
        .select(
          'i.name',
          'rI.quantity',
          'u.name as unit'
        );
    } catch (err) {
      console.log(err);
      throw(err);
    }
  });
};