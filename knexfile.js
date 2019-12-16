module.exports = {
  testing: {
    client: 'sqlite3',
    connection: { filename: './test-database/recipes.db3' },
    useNullAsDefault: true,
    migrations: { directory: './test-database/migrations' },
    seeds: { directory: './test-database/seeds' },
  },
};
