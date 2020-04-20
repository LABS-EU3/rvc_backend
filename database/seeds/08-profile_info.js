exports.seed = function (knex) {
  return knex('profile_info').insert([
    {
      profile_pic:
        'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-user-20.png&r=10&g=178&b=138',
      first_name: 'Admin',
      last_name: 'McBossman',
      bio:
        'I like to cook. But more than that, I like to administrate RVC apps.',
      user_id: 1,
    },
    {
      profile_pic:
        'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-user-20.png&r=10&g=178&b=138',
      first_name: 'Userman',
      last_name: 'Poster',
      bio: 'Check out my most popular recipes below!',
      user_id: 2,
    },
    {
      profile_pic:
        'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-user-20.png&r=10&g=178&b=138',
      first_name: 'Person',
      last_name: 'Perterson',
      bio:
        'I am a person and definitely not a robot. I like ape fuel, like you.',
      user_id: 3,
    },
  ]);
};
