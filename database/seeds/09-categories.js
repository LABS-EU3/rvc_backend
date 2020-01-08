
exports.seed = function(knex) {
  return knex('categories').insert([
    {name: 'breakfast'}, //1
    {name: 'brunch'}, //2
    {name: 'lunch'}, //3
    {name: 'dinner'}, //4
    {name: 'starter'}, //5
    {name: 'main'}, //6
    {name: 'dessert'}, //7
    {name: 'soup'}, //8
    {name: 'salad'}, //9
    {name: 'beverage'}, //10
    {name: 'snack'}, //11
    {name: 'misc.'} //12
  ]);
};