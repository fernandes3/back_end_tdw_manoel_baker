const knex = require('knex'); 
const config = require('../../knexfile');

//const connection = knex(config.development);
const connection = knex(config.production);

module.exports = connection;