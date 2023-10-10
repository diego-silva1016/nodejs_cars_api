const knexConfig =  require('../../knexfile')[process.env.NODE_ENV || 'development'];
console.log(process.env.NODE_ENV)
const knex = require('knex')(knexConfig);

module.exports = knex;