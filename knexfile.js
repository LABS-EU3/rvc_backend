require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: process.env.DATABASE_DEV_PORT,
      database: process.env.DATABASE_DEV,
      user: process.env.DATABASE_DEV_USERNAME,
      password: process.env.DATABASE_DEV_PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'pg',
    connection: {
      port: process.env.DATABASE_DEV_PORT,
      database: process.env.DATABASE_TEST,
      user: process.env.DATABASE_DEV_USERNAME,
      password: process.env.DATABASE_DEV_PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }

};
