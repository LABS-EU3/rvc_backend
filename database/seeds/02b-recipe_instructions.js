exports.seed = function (knex) {
  return knex('recipe_instructions').insert([
    { recipe_id: 1, instruction_id: 1 },
    { recipe_id: 1, instruction_id: 2 },
    { recipe_id: 1, instruction_id: 3 },

    { recipe_id: 2, instruction_id: 4 },
    { recipe_id: 2, instruction_id: 5 },
    { recipe_id: 2, instruction_id: 6 },

    { recipe_id: 3, instruction_id: 7 },
    { recipe_id: 3, instruction_id: 8 },
    { recipe_id: 3, instruction_id: 9 },
    { recipe_id: 3, instruction_id: 10 },

    { recipe_id: 4, instruction_id: 11 },
    { recipe_id: 4, instruction_id: 12 },
    { recipe_id: 4, instruction_id: 13 },
    { recipe_id: 4, instruction_id: 14 },

    { recipe_id: 5, instruction_id: 15 },
    { recipe_id: 5, instruction_id: 16 },
    { recipe_id: 5, instruction_id: 17 },
    { recipe_id: 5, instruction_id: 18 },
    { recipe_id: 5, instruction_id: 19 },
    { recipe_id: 5, instruction_id: 20 },
    { recipe_id: 5, instruction_id: 21 },
    { recipe_id: 5, instruction_id: 22 },

    { recipe_id: 6, instruction_id: 23 },
    { recipe_id: 6, instruction_id: 24 },
    { recipe_id: 6, instruction_id: 25 },

    { recipe_id: 7, instruction_id: 26 },
    { recipe_id: 7, instruction_id: 27 },
    { recipe_id: 7, instruction_id: 28 },
    { recipe_id: 7, instruction_id: 29 },
    { recipe_id: 7, instruction_id: 30 },

    { recipe_id: 8, instruction_id: 31 },
    { recipe_id: 8, instruction_id: 32 },
    { recipe_id: 8, instruction_id: 33 },
    { recipe_id: 8, instruction_id: 34 },

    { recipe_id: 9, instruction_id: 35 },
    { recipe_id: 9, instruction_id: 36 },
    { recipe_id: 9, instruction_id: 37 },

    { recipe_id: 10, instruction_id: 38 },
    { recipe_id: 10, instruction_id: 39 },
    { recipe_id: 10, instruction_id: 40 },
    { recipe_id: 10, instruction_id: 41 },

    { recipe_id: 11, instruction_id: 42 },
    { recipe_id: 11, instruction_id: 43 },
    { recipe_id: 11, instruction_id: 44 },
    { recipe_id: 11, instruction_id: 45 },

    { recipe_id: 12, instruction_id: 46 },
    { recipe_id: 12, instruction_id: 47 },
    { recipe_id: 12, instruction_id: 48 },
    { recipe_id: 12, instruction_id: 49 },

    { recipe_id: 13, instruction_id: 50 },
    { recipe_id: 13, instruction_id: 51 },
    { recipe_id: 13, instruction_id: 52 },
    { recipe_id: 13, instruction_id: 53 },
    { recipe_id: 13, instruction_id: 54 },

    { recipe_id: 14, instruction_id: 55 },
    { recipe_id: 14, instruction_id: 56 },
    { recipe_id: 14, instruction_id: 57 },

    { recipe_id: 15, instruction_id: 58 },
    { recipe_id: 15, instruction_id: 59 },
    { recipe_id: 15, instruction_id: 60 },
    { recipe_id: 15, instruction_id: 61 },
    { recipe_id: 15, instruction_id: 62 },
    { recipe_id: 15, instruction_id: 63 },
    { recipe_id: 15, instruction_id: 64 },
    { recipe_id: 15, instruction_id: 65 },
    { recipe_id: 15, instruction_id: 66 },
    { recipe_id: 15, instruction_id: 67 },

    { recipe_id: 16, instruction_id: 68 },
    { recipe_id: 16, instruction_id: 69 },
    { recipe_id: 16, instruction_id: 70 },
  ]);
};
