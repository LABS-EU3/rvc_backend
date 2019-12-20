
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'eggs'}, //1
    {name: 'flour'}, //2
    {name: 'sugar'}, //3
    {name: 'salt'}, //4
    {name: 'milk'}, //5
    {name: 'butter'}, //6
    {name: 'baking powder'}, //7
    {name: 'vegetable oil'}, //8
    {name: 'maple syrup'}, //9
    {name: 'bananas'}, //10
    {name: 'water'}, //11
    {name: 'self-raising flour'}, //12
    {name: 'blueberries'}, //13
    {name: 'sunflower oil'}, //14
    {name: 'Nutella'}, //15
    {name: 'vanilla extract'}, //16
    {name: 'onions'}, //17
    {name: 'tomatoes'}, //18
    {name: 'garlic'}, //19
    {name: 'coriander'}, //20
    {name: 'black pepper'}, //21
    {name: 'chicken'}, //22
    {name: 'peppers'}, //23
    {name: 'paprika'}, //24
    {name: 'chilli powder'}, //25
    {name: 'cumin'}, //26
    {name: 'oregano'}, //27
    {name: 'lettuce'}, //28
    {name: 'beef mince'}, //29
    {name: 'vinegar'}, //30
    {name: 'passata'}, //31
    {name: 'brown sugar'}, //32
    {name: 'flour tortillas'}, //33
    {name: 'red onions'}, //34,
    {name: 'olive oil'}, //35
    {name: 'black beans'} //36
  ]);
};
