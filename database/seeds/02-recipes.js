
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      title: 'Sweet Crepes',
      description: "Sweet, sweet crepes. Good with a light dusting of icing sugar and a few drops from a squeezed lemon.",
      instructions: JSON.stringify([
        'Whisk the eggs, flour, sugar and salt until combined. Gradually add the milk and whisk until you get a smooth batter. Let stand for 15 minutes.',
        'In a small skillet over medium heat, melt the butter. Use a ladle to pour and spread out some of the mixture.',
        'Cook 2 minutes, then flip and cook 1 minute more; repeat with remaining batter. Serve crepes warm.'
      ]),
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 1,
      parent_id: 1,
      created_at: '2019-05-13 20:30:17-02' // Not sure on the formatting here, but I'm following: http://www.postgresqltutorial.com/postgresql-timestamp/
    },
    {
      title: 'Pancakes',
      description: 'Easy, American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch.',
      instructions: JSON.stringify([
        'Mix the flour, baking powder, caster sugar and a pinch of salt together in a large bowl...',
        'Heat a small knob of butter and 1 tsp of oil in a large, non-stick frying pan over a medium heat...',
        'Serve your pancakes stacked up on a plate with a drizzle of maple syrup and any of your favourite toppings.'
      ]),
      time_required: 55,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 1,
      created_at: '2019-05-15 14:12:00-04'
    },
    // {
    //   title: 'Banana Pancakes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 2,
    //   created_at:
    // },
    // {
    //   title: 'Mini Crepes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 1,
    //   created_at:
    // },
    // {
    //   title: 'Blueberry Pancakes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 2,
    //   created_at:
    // },
    // {
    //   title: 'Maple Pancakes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 2,
    //   created_at:
    // },
    // {
    //   title: 'Pancake Cookies',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 4,
    //   created_at:
    // },
    // {
    //   title: 'Nutella and Banana Pancakes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 3,
    //   created_at:
    // },
    // {
    //   title: 'Savoury Crepes',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 1,
    //   created_at:
    // },
    // {
    //   title: 'Chipati',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 9,
    //   created_at:
    // },
    // {
    //   title: 'Roti',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 11,
    //   created_at:
    // },
    // {
    //   title: 'Tortillas',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 9,
    //   created_at:
    // },
    // {
    //   title: 'Fajitas',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 12,
    //   created_at:
    // },
    // {
    //   title: 'Beef Burritos',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 13,
    //   created_at:
    // },
    // {
    //   title: 'Enchiladas',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 13,
    //   created_at:
    // },
    // {
    //   title: 'Soft Shell Tacos',
    //   description:,
    //   instructions:,
    //   time_required:,
    //   difficulty:,
    //   budget:,
    //   user_id:,
    //   parent_id: 15,
    //   created_at:
    // },
  ]);
};
