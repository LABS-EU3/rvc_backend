// Note: The parent/child relationships in the following data match those in the db-algorithm-test branch.

exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      title: 'Sweet Crepes', //1
      description:
        'Sweet, sweet crepes. Good with a light dusting of icing sugar and a few drops from a squeezed lemon.',
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 1,
      parent_id: 1,
      created_at: '2019-05-13 20:30:17-02' // Not sure on the formatting here, but I'm following: http://www.postgresqltutorial.com/postgresql-timestamp/
    },
    {
      title: 'Pancakes', //2
      description:
        'Easy, American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch.',
      time_required: 55,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 1,
      created_at: '2019-05-15 14:12:00-04'
    },
    {
      title: 'Banana Pancakes', //3
      description:
        'Fluffy on the inside, crispy on the outside and delicately flavored with bananas, these are phenomenal banana pancakes.',
      time_required: 30,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-01 13:04:34-04'
    },
    {
      title: 'Mini Crepes', //4
      description:
        'Crepes are age-old breakfast traditions but they’re great for anytime of the day! This is a very basic no-fail wheat flour crepes recipe.',
      time_required: 45,
      difficulty: 1,
      budget: 1,
      user_id: 1,
      parent_id: 1,
      created_at: '2019-06-01 15:34:47-02'
    },
    {
      title: 'Blueberry Pancakes', //5
      description: 'Light, fluffy and fruity, these pancakes are a US classic.',
      time_required: 35,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-05 10:00:00-04'
    },
    {
      title: 'Maple Pancakes', //6
      description: 'Like regular pancakes, but made with maple batter.',
      time_required: 55,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-06 11:49:59-04'
    },
    {
      title: 'Pancake Cookies', //7
      description: 'Like mini crepes, except thicker and baked like cookies.',
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 4,
      created_at: '2019-08-01 15:32:38-04'
    },
    {
      title: 'Nutella and Banana Pancakes', //8
      description: 'Like banana pancakes, with nutella.',
      time_required: 30,
      difficulty: 1,
      budget: 2,
      user_id: 2,
      parent_id: 3,
      created_at: '2019-08-23 08:49:00-04'
    },
    {
      title: 'Savoury Crepes', //9
      description: 'Crepes for those with less of a sweet tooth.',
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 3,
      parent_id: 1,
      created_at: '2019-09-01 12:00:00'
    },
    {
      title: 'Chapatis', //10
      description:
        'This traditional Indian side dish is easier than you think and only takes a handful of ingredients',
      time_required: 45,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 9,
      created_at: '2019-09-03 15:35:42'
    },
    {
      title: 'Roti', //11
      description:
        'An authentic roti bread recipe, brilliant to serve with curries, making a good alternative to rice.',
      time_required: 50,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 11,
      created_at: '2019-09-04 10:03:20'
    },
    {
      title: 'Tortillas', //12
      description: 'A small change to savoury crepes makes lovely tortillas!',
      time_required: 45,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 9,
      created_at: '2019-09-05 12:00:00'
    },
    {
      title: 'Fajitas', //13
      description:
        'Fajitas are a fun meal to cook for the family. Try topping with homemade salsa to make them extra delicious.',
      time_required: 75,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 12,
      created_at: '2019-10-09 12:30:00'
    },
    {
      title: 'Beef Burritos', //14
      description:
        'Make these easy beef burritos for a simple midweek supper. The meat filling is also great stuffed into a crispy taco, or as an easy chilli con carne with rice',
      time_required: 50,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 13,
      created_at: '2019-10-30 22:47:02'
    },
    {
      title: 'Enchiladas', //15
      description:
        'You can make the sauce ahead of time for these chicken enchiladas, served with coriander, avocado and soured cream.',
      time_required: 90,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 13,
      created_at: '2019-11-17 18:24:42'
    },
    {
      title: 'Soft Shell Tacos', //16
      description:
        'Make your own tortillas – simple as anything – then add spicy beef, refried beans, guacamole, salsa and a quick red onion pickle for a Mexican feast.',
      time_required: 65,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 15,
      created_at: '2019-12-19 10:40:24'
    }
  ]);
};
