const db = require('../../../database/dbConfig');

module.exports = {
  findAllIngredients,
  findIngredientBy,
  addIngredient,
  removeIngredientFromRecipe,
  addIngredientToRecipe
};

async function findAllIngredients() {
  const ingredients = await db('ingredients');
  return ingredients;
}

async function findIngredientBy(info) {
  const ingredient = await db('ingredients')
    .where({ id: info })
    .orWhere({ name: info });
  return ingredient;
}

async function addIngredient(name) {
  const [ingredient] = await db('ingredients')
    .returning('*')
    .insert(name);
  return ingredient;
}

async function removeIngredientFromRecipe(body, recipe_id) {
  const { index } = body;

  return await db.transaction(async trx => {
    try {
      const recipeIngredientsIds = await trx('recipe_ingredients')
        .where('recipe_ingredients.recipe_id', recipe_id)
        .select('recipe_ingredients.id');
      const { id } = recipeIngredientsIds[index]
        ? recipeIngredientsIds[index]
        : { id: undefined }; // (The id of the recipe_ingredients row to be deleted!)
      if (!id) {
        throw 'Index is out of range!';
      }

      const ingredientIdObject = await trx('recipe_ingredients')
        .join(
          'ingredients',
          'recipe_ingredients.ingredient_id',
          'ingredients.id'
        )
        .where('recipe_ingredients.id', id)
        .select('ingredients.id')
        .first();
      const ingredient_id = ingredientIdObject.id;

      // Need to grab the ingredient before deleting it!
      const [ingredientToBeDeleted] = await trx('recipe_ingredients')
        .join(
          'ingredients',
          'recipe_ingredients.ingredient_id',
          'ingredients.id'
        )
        .join('units', 'recipe_ingredients.unit_id', 'units.id')
        .where('recipe_ingredients.id', id)
        .select(
          'ingredients.name',
          'recipe_ingredients.quantity',
          'units.name as unit'
        );

      await trx('recipe_ingredients')
        .where('recipe_ingredients.id', id)
        .del();

      // If the ingredient isn't featured in _any_ recipe, might as well delete it from the 'ingredients' table!
      const ingredientAppearances = await trx('recipe_ingredients').where(
        'recipe_ingredients.ingredient_id',
        ingredient_id
      );

      if (ingredientAppearances.length === 0) {
        await trx('ingredients')
          .where('ingredients.id', ingredient_id)
          .del();
      }

      return ingredientToBeDeleted;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
}

async function addIngredientToRecipe(body, recipe_id) {
  const { name, quantity, unit_id } = body;

  return await db.transaction(async trx => {
    try {
      // Similar thinking as above: need to check whether the ingredient already exists
      // in the 'ingredients' table before posting!
      const [ingredient_idObject] = await trx('ingredients')
        .where('ingredients.name', name)
        .select('ingredients.id');

      const ingredient_id = ingredient_idObject
        ? ingredient_idObject.id
        : undefined;

      if (ingredient_id) {
        await trx('recipe_ingredients').insert({
          recipe_id,
          ingredient_id,
          quantity,
          unit_id
        });
      } else {
        const [newIngredientId] = await trx('ingredients')
          .insert({ name })
          .returning('id');

        await trx('recipe_ingredients').insert({
          recipe_id,
          ingredient_id: newIngredientId,
          quantity,
          unit_id
        });
      }

      return await trx('recipe_ingredients')
        .join(
          'ingredients',
          'recipe_ingredients.ingredient_id',
          'ingredients.id'
        )
        .join('units', 'recipe_ingredients.unit_id', 'units.id')
        .where('recipe_ingredients.recipe_id', recipe_id)
        .select(
          'ingredients.name',
          'recipe_ingredients.quantity',
          'units.name as unit'
        );
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
}

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

  const { name, quantity, unit_id, index } = body;

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
      const { id } = recipeIngredientsIds[index] ? recipeIngredientsIds[index] : {id: undefined}; // (The id of the recipe_ingredients row to be updated!)
      if (!id) { throw "Index is out of range!" };

      await trx('recipe_ingredients')
        .update('quantity', quantity)
        .where('id', id);

      await trx('recipe_ingredients')
        .update('unit_id', unit_id)
        .where('id', id);
      // (Note: the above need to be separate because .update() doesn't properly chain!)

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

