
exports.seed = function(knex) {
  return knex('recipe_categories').insert([
    {recipe_id: 1, category_id: 2}, // Might be nice for folks to be
    {recipe_id: 1, category_id: 7}, // able to pick up to 2 categories!
    {recipe_id: 2, category_id: 2},
    {recipe_id: 3, category_id: 2},
    {recipe_id: 4, category_id: 11},
    {recipe_id: 5, category_id: 2},
    {recipe_id: 6, category_id: 2},
    {recipe_id: 7, category_id: 7},
    {recipe_id: 7, category_id: 11},
    {recipe_id: 8, category_id: 2},
    {recipe_id: 9, category_id: 3},
    {recipe_id: 9, category_id: 4},
    {recipe_id: 10, category_id: 3},
    {recipe_id: 10, category_id: 4},
    {recipe_id: 11, category_id: 3},
    {recipe_id: 11, category_id: 4},
    {recipe_id: 12, category_id: 3},
    {recipe_id: 12, category_id: 4},
    {recipe_id: 13, category_id: 3},
    {recipe_id: 13, category_id: 6},
    {recipe_id: 14, category_id: 4},
    {recipe_id: 14, category_id: 6},
    {recipe_id: 15, category_id: 4},
    {recipe_id: 16, category_id: 6}
  ]);
};
