
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {name: 'sweet crepes', parent_id: 1},
        {name: 'pancakes', parent_id: 1},
        {name: 'blueberry pancakes', parent_id: 2},
        {name: 'mini pancakes', parent_id: 1},
        {name: 'chocolate chip pancakes', parent_id: 2},
        {name: 'banana pancakes', parent_id: 2},
        {name: 'cupcakes', parent_id: 4},
        {name: 'wild berry pancakes', parent_id: 3},
        {name: 'savoury crepes', parent_id: 1},
        {name: 'chapati', parent_id: 9},
        {name: 'roti', parent_id: 10},
        {name: 'tortillas', parent_id: 9},
        {name: 'fajitas', parent_id: 12},
        {name: 'enchiladas', parent_id: 13},
        {name: 'burritos', parent_id: 13},
        {name: 'vegetarian burritos', parent_id: 15},
      ]);
    });
};
