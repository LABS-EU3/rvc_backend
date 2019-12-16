const knex = require('knex');
const config = require('../knexfile');

const dbEnv = 'testing';

module.exports = knex(config[dbEnv]);