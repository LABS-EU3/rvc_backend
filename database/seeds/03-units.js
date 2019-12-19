
exports.seed = function(knex) {
  return knex('units').insert([
    {name: ''},
    {name: 'kg'},
    {name: 'g'},
    {name: 'ml'},
    {name: 'cups'},
    {name: 'tbsp'},
    {name: 'tsp'},
    {name: 'pinches'}
  ]);
};
