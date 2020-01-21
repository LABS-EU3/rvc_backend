const db = require('../../../database/dbConfig');
const userDb = require('../../recipe/models/recipe-models');

module.exports = {
  getLikedRecipesByUserId,
  insertLike,
  deleteLike
};

async function getLikedRecipesByUserId(id) {
  const recipes = await db('likes')
    .select(
      'recipes.id',
      'users.id as user_id',
      'recipes.parent_id',
      'users.username as author',
      'recipes.title as recipe_title',
      'recipes.description',
      'recipes.time_required',
      'recipes.difficulty',
      'recipes.budget'
    )
    .leftJoin('users', 'users.id', 'likes.user_id')
    .leftJoin('recipes', 'recipes.id', 'likes.recipe_id')
    .count('likes.user_id as likes')
    .groupBy('recipes.id', 'users.id')
    .where('likes.user_id', id);

  return recipes.length
    ? recipes
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
