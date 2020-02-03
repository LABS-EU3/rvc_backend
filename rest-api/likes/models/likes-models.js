const db = require('../../../database/dbConfig');
const userDb = require('../../recipe/models/recipe-models');

module.exports = {
  getLikedRecipesByUserId,
  insertLike,
  deleteLike
};

async function getLikesByRecipeID(id){
  const likes = await db('likes')
  .count('likes.user_id as likes')
  .leftJoin('recipes','likes.recipe_id', 'recipes.id')
  .where('likes.recipe_id', id)
  .groupBy('recipes.id')
  .first();

  return Number(likes.likes)
}

async function getLikedRecipesByUserId(id) {
  const recipes = await db('likes')
    .select(
      'recipes.id',
      'recipes.user_id',
      'recipes.parent_id',
      'users.username as author',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget',
      'images.url as imageUrl'
    )
    .leftJoin('recipes', 'recipes.id', 'likes.recipe_id')
    .leftJoin('users', 'users.id', 'recipes.user_id')
    .leftJoin('recipe_images', 'recipe_images.recipe_id', 'recipes.id')
    .leftJoin('images', 'images.id', 'recipe_images.image_id')
    .where('likes.user_id', id);
    
    const recipeWithLikes = [];

    // .map() doesn't work with async
    // need to find SQL query in order to optimize this
    for(recipe of recipes){
      recipeWithLikes.push({
        ...recipe,
        likes: await getLikesByRecipeID(recipe.id)
      })
    }


  return recipes.length
    ? recipeWithLikes
    : { message: 'The id provided is invalid or has expired' };
}

async function insertLike(like) {
  const [insert] = await db('likes')
    .insert(like)
    .returning('*');
  return await userDb.getRecipeById(insert.recipe_id);
}

async function deleteLike(like) {
  const insert = await db('likes')
    .del()
    .where(like);
  if (insert) {
    return { isDeleted: true, message: 'Like removed' };
  } else {
    throw { isDeleted: false, message: 'Like was not removed' };
  }
}
