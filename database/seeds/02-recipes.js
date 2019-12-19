// Note: The parent/child relationships in the following data match those in the db-algorithm-test branch.

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
    {
      title: 'Banana Pancakes',
      description: 'Fluffy on the inside, crispy on the outside and delicately flavored with bananas, these are phenomenal banana pancakes.',
      instructions: JSON.stringify([
        'In a medium bowl, whisk together the flour, sugar, baking powder and salt.',
        'In a small bowl, mash the banana with a fork until almost smooth. Whisk in the eggs, then add the milk and vanilla...',
        'Set a griddle or non-stick pan over medium heat until hot. Put a pad of butter and one tablespoon vegetable oil onto the griddle, and swirl it around...',
        'Wipe the griddle clean with paper towels, add more butter and oil, and repeat with the remaining batter. Serve the pancakes while still hot with maple syrup, sliced bananas and icing sugar if desired.'
      ]),
      time_required: 30,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-01 13:04:34-04'
    },
    {
      title: 'Mini Crepes',
      description: 'Crepes are age-old breakfast traditions but they’re great for anytime of the day! This is a very basic no-fail wheat flour crepes recipe.',
      instructions: JSON.stringify([
        'In a bowl whisk the flour with the eggs then add in the milk and the water and mix until well combined.',
        'Add salt and butter and beat until smooth.',
        'On a medium heat, heat a greased frying pan and pour in a scoop of thin batter (the size of the batter depends on how big you want your crepes to be). Tilt the pan so the batter spreads evenly.',
        'Fry the crepe for about 2 minutes or until the the bottom of the crepe is light brown, turn the crepe to fry the other side. Top with fresh fruits if desired and serve warm.'
      ]),
      time_required: 45,
      difficulty: 1,
      budget: 1,
      user_id: 1,
      parent_id: 1,
      created_at: '2019-06-01 15:34:47-02'
    },
    {
      title: 'Blueberry Pancakes',
      description: 'Light, fluffy and fruity, these pancakes are a US classic.',
      instructions: JSON.stringify([
        'Mix together 200g self-raising flour, 1 tsp baking powder and a pinch of salt in a large bowl.',
        'Beat 1 egg with 300ml milk, make a well in the centre of the dry ingredients and whisk in the milk to make a thick smooth batter.',
        'Beat in a knob of melted butter, and gently stir in half of the 150g pack of blueberries.',
        'Heat a teaspoon of sunflower oil or small knob of butter in a large non-stick frying pan.',
        'Drop a large tablespoonful of the batter per pancake into the pan to make pancakes about 7.5cm across. Make three or four pancakes at a time.',
        'Cook for about 3 minutes over a medium heat until small bubbles appear on the surface of each pancake, then turn and cook another 2-3 minutes until golden.',
        'Cover with kitchen paper to keep warm while you use up the rest of the batter.',
        'Serve with golden or maple syrup and the rest of the blueberries.'
      ]),
      time_required: 35,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-05 10:00:00-04'
    },
    {
      title: 'Maple Pancakes',
      description: 'Like regular pancakes, but made with maple batter.',
      instructions: JSON.stringify([
        'Mix the flour, baking powder, maple syrup, caster sugar and a pinch of salt together in a large bowl...',
        'Heat a small knob of butter and 1 tsp of oil in a large, non-stick frying pan over a medium heat...',
        'Serve your pancakes stacked up on a plate with a drizzle of maple syrup and any of your favourite toppings.'
      ]),
      time_required: 55,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 2,
      created_at: '2019-06-06 11:49:59-04'
    },
    {
      title: 'Pancake Cookies',
      description: 'Like mini crepes, except thicker and baked like cookies.',
      instructions: JSON.stringify([
        'Preheat the oven to 350°C.',
        'In a bowl whisk the flour with the eggs then add in the milk and the water and mix until well combined.',
        'Add salt and butter and beat until smooth.',
        'Grease a cupcake pan with butter. Pour the batter into the holes.',
        'Bake for 5-10 minutes, until brown.'
      ]),
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 2,
      parent_id: 4,
      created_at: '2019-08-01 15:32:38-04'
    },
    {
      title: 'Nutella and Banana Pancakes',
      description: 'Like banana pancakes, with nutella.',
      instructions: JSON.stringify([
        'In a medium bowl, whisk together the flour, sugar, baking powder and salt.',
        'In a small bowl, mash the banana with a fork until almost smooth and add the nutella. Whisk in the eggs, then add the milk and vanilla...',
        'Set a griddle or non-stick pan over medium heat until hot. Put a pad of butter and one tablespoon vegetable oil onto the griddle, and swirl it around...',
        'Wipe the griddle clean with paper towels, add more butter and oil, and repeat with the remaining batter. Serve the pancakes while still hot with maple syrup, sliced bananas and icing sugar if desired.'
      ]),
      time_required: 30,
      difficulty: 1,
      budget: 2,
      user_id: 2,
      parent_id: 3,
      created_at: '2019-08-23 08:49:00-04'
    },
    {
      title: 'Savoury Crepes',
      description: 'Crepes for those with less of a sweet tooth.',
      instructions: JSON.stringify([
        'Whisk the eggs, flour, and salt until combined. Gradually add the milk and whisk until you get a smooth batter. Let stand for 15 minutes.',
        'In a small skillet over medium heat, melt the butter. Use a ladle to pour and spread out some of the mixture.',
        'Cook 2 minutes, then flip and cook 1 minute more; repeat with remaining batter. Serve crepes warm.'
      ]),
      time_required: 60,
      difficulty: 1,
      budget: 1,
      user_id: 3,
      parent_id: 1,
      created_at: '2019-09-01 12:00:00'
    },
    {
      title: 'Chapatis',
      description: 'This traditional Indian side dish is easier than you think and only takes a handful of ingredients',
      instructions: JSON.stringify([
        'In a large bowl, stir together the flours and salt. Use a wooden spoon to stir in the olive oil and enough water to make a soft dough that is elastic but not sticky.',
        'Knead the dough on a lightly floured surface for 5-10 mins until it is smooth. Divide into 10 pieces, or less if you want bigger breads. Roll each piece into a ball. Let rest for a few mins.',
        'Heat a frying pan over medium heat until hot, and grease lightly. On a lightly floured surface, use a floured rolling pin to roll out the balls of dough until very thin like a tortilla.',
        'When the pan starts smoking, put a chapati on it. Cook until the underside has brown spots, about 30 seconds, then flip and cook on the other side. Put on a plate and keep warm while you cook the rest of the chapatis.'
      ]),
      time_required: 45,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 9,
      created_at: '2019-09-03 15:35:42'
    },
    {
      title: 'Roti',
      description: 'An authentic roti bread recipe, brilliant to serve with curries, making a good alternative to rice.',
      instructions: JSON.stringify([
        'Sift the flour and salt into a large bowl. Sprinkle over the oil, and add enough water to make a soft dough (about 140ml/4½fl oz) – add a little more flour or water if needed. Knead gently until smooth. Cover and leave to rest for about 30 minutes.',
        'On a floured work surface, divide the dough into six equal pieces and roll each one into a thin circle about the thickness of a 20 pence coin (about 2mm), using a rolling pin.',
        'Brush the bottom third of one of the roti with oil using a pastry brush, dust with a little extra flour and fold the oiled third towards the middle. Repeat with the top third, fold inwards again. Give the roti a quarter turn (90 degrees) and repeat the folding process – you should end up with a rough square. Leave to rest while you make the remaining five rotis.',
        'Heat a little oil in a heavy-based pan. Using a rolling pin, roll out one of the roti thinly and then fry on one side until it puffs up and is speckled brown on the underside. Turn it over and fry on the other side for a few minutes, until it too is puffed and speckled brown. Remove from the pan, allowing the roti to cool for a few seconds, then fold into four. Wrap in a clean tea towel placed in a colander until ready to eat. Repeat until all the roti are cooked. Serve warm.'
      ]),
      time_required: 50,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 11,
      created_at: '2019-09-04 10:03:20'
    },
    {
      title: 'Tortillas',
      description: 'A small change to savoury crepes makes lovely tortillas!',
      instructions: JSON.stringify([
        'In a large bowl, combine flour and salt. Stir in water and oil. Turn onto a floured surface; knead 10-12 times, adding a little flour or water if needed to achieve a smooth dough. Let rest for 10 minutes.',
        'Divide dough into 8 portions. On a lightly floured surface, roll each portion into a 7-in. circle.',
        'Divide dough into 8 portions. On a lightly floured surface, roll each portion into a 7-in. circle.',
        'In a greased cast-iron or other heavy skillet, cook tortillas over medium heat until lightly browned, 1 minute on each side. Keep warm.'
      ]),
      time_required: 45,
      difficulty: 2,
      budget: 1,
      user_id: 3,
      parent_id: 9,
      created_at: '2019-09-05 12:00:00'
    },
    {
      title: 'Fajitas',
      description: 'Fajitas are a fun meal to cook for the family. Try topping with homemade salsa to make them extra delicious.',
      instructions: JSON.stringify([
        'Preheat the oven to 180C/160C Fan/Gas 4.',
        'For the salsa, combine the onion, tomatoes, garlic and coriander in a bowl. Season with pepper. Cover and chill for 30 minutes.',
        'For the chicken, heat the oil in a wok or large frying pan, add the onion and peppers and stir-fry for 3-4 minutes. Add the chicken, paprika, chilli powder, cumin and oregano and cook for 5 minutes, or until the chicken is cooked through.',
        'Meanwhile, wrap the tortillas in foil and warm them in the oven for 5 minutes.',
        'Spoon one-quarter of the chicken mixture into the centre of each tortilla, add a couple of tablespoons of salsa and some shredded lettuce. Roll up and serve warm.'
      ]),
      time_required: 75,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 12,
      created_at: '2019-10-09 12:30:00'
    },
    {
      title: 'Beef Burritos',
      description: 'Make these easy beef burritos for a simple midweek supper. The meat filling is also great stuffed into a crispy taco, or as an easy chilli con carne with rice',
      instructions: JSON.stringify([
        'Heat the oil in a large pan – a casserole is ideal. Fry the onions for 8 mins, then add the garlic, spices and oregano and cook for 1 min. Crumble over the mince and sizzle for 5 mins, stirring, until browned. Stir in the sugar and leave for a minute, then splash in the vinegar and pour in the tomatoes.',
        'Simmer for 5 mins then tip in the beans and the water from the can. Season, stir and simmer everything for 20 mins until the beef is in a thick gravy. The sauce can be prepared up to 2 days ahead, chilled and reheated with a splash of water or frozen for 6 months.',
        'To make the burritos, heat the tortillas following pack instructions. Pile some rice and beef sauce along each tortilla and scatter over your choice of topping. Fold over the ends and roll up to seal. Secure by wrapping with foil if you want. Eat immediately.',
      ]),
      time_required: 50,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 13,
      created_at: '2019-10-30 22:47:02'
    },
    {
      title: 'Enchiladas',
      description: 'You can make the sauce ahead of time for these chicken enchiladas, served with coriander, avocado and soured cream.',
      instructions: JSON.stringify([
        'Start by making the enchilada sauce. Put the onion into a medium saucepan with the olive oil and cook over a low-medium heat for 7–8 minutes, or until soft and just starting to brown at the edges.',
        'Add the crushed garlic and cook for a further minute. Add the smoked paprika, dried oregano, chilli powder and ground cumin, mix well and cook for a further 30 seconds.',
        'Add the passata, brown sugar and vinegar to the pan, season well with salt and freshly ground black pepper and cook over a low–medium heat for 20 minutes until thickened slightly. Remove from the heat and blend until smooth.',
        'Preheat the oven to 190C/170C/Gas 5.',
        'For the enchilada, heat half of the olive oil in a large frying pan, add the sliced onions and peppers and cook over a medium heat for about 3 minutes, or until just tender and starting to caramelise at the edges. Add the garlic and red chilli and cook for a further 30 seconds. Remove from the pan and set aside.',
        'Heat the remaining oil in the frying pan, add the chicken and cook quickly over a medium heat until cooked through and golden brown.',
        'Return the onion and pepper mixture to the pan, add half of the enchilada sauce, and drained kidney beans, season well and cook for a further minute.',
        'Lay the flour tortillas on the work surface and divide the chicken mixture between them. Roll the flour tortillas around the filling into cigars and arrange neatly and snuggly in an ovenproof dish (roughly 20 x 30cm/8x 12in). Spoon the remaining enchilada sauce over the top and scatter with grated cheese.',
        'Bake for about 20 minutes, or until the filling is piping hot and the cheese bubbling, melted and golden-brown.',
        'To serve, scatter with the spring onions and chopped coriander and serve with sliced avocado and soured cream alongside.'
      ]),
      time_required: 90,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 13,
      created_at: '2019-11-17 18:24:42'
    },
    {
      title: 'Soft Shell Tacos',
      description: 'Make your own tortillas – simple as anything – then add spicy beef, refried beans, guacamole, salsa and a quick red onion pickle for a Mexican feast.',
      instructions: JSON.stringify([
        'To make the red onion pickle, put the vinegar, sugar and salt in a small saucepan, cover with cold water and bring to the boil. Take the pan off the heat and add the onion. Leave to stand for 30–60 minutes. Drain well before serving.',
        'To make the tortillas, place the flour and salt in a large bowl and gradually add the oil and 125ml/4fl oz water, stirring constantly until the mixture comes together to form a rough dough. Transfer to a lightly floured surface and knead for 5 minutes. Roll into a ball, wrap in cling film and chill for 30 minutes.',
        'Etc.'
      ]),
      time_required: 65,
      difficulty: 2,
      budget: 2,
      user_id: 3,
      parent_id: 15,
      created_at: '2019-12-19 10:40:24'
    },
  ]);
};
