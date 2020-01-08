
exports.seed = function(knex) {
  return knex('tags').insert([
    {name: 'sweet'}, //1
    {name: 'easy'}, //2
    {name: 'quick'}, //3
    {name: 'banana'}, //4
    {name: 'blueberry'}, //5
    {name: 'fruity'}, //6
    {name: 'seasonal'}, //7
    {name: 'baked'}, //8
    {name: 'savoury'}, //9
    {name: 'bread'}, //10
    {name: 'filling'}, //11
    {name: 'meat'}, //12
    {name: 'saucy'}, //13
  ]);
};

// {name: ''},
