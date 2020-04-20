exports.seed = function (knex) {
  return knex('units').insert([
    { name: 'no unit; REPLACE W/ EMPTY STRING' }, // 1
    { name: 'kg' }, // 2
    { name: 'g' }, // 3
    { name: 'ml' }, // 4
    { name: 'cups' }, // 5
    { name: 'tbsp' }, // 6
    { name: 'tsp' }, // 7
    { name: 'pinch' }, // 8
    { name: 'knob' }, // 9
    { name: 'cloves' }, // 10
    { name: 'handfull' }, // 11
  ]);
};
