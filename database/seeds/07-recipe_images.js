exports.seed = function (knex) {
  return knex('recipe_images').insert([
    { image_id: 1, recipe_id: 1 },
    { image_id: 2, recipe_id: 2 },
    { image_id: 3, recipe_id: 3 },
    { image_id: 4, recipe_id: 4 },
    { image_id: 5, recipe_id: 5 },
    { image_id: 6, recipe_id: 6 },
    { image_id: 7, recipe_id: 7 },
    { image_id: 8, recipe_id: 8 },
    { image_id: 9, recipe_id: 9 },
    { image_id: 10, recipe_id: 10 },
    { image_id: 11, recipe_id: 11 },
    { image_id: 12, recipe_id: 12 },
    { image_id: 13, recipe_id: 13 },
    { image_id: 14, recipe_id: 14 },
    { image_id: 15, recipe_id: 15 },
    { image_id: 16, recipe_id: 16 },
  ]);
};
