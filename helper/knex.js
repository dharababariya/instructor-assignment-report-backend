const knex = require('knex')({

  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 1,
    max: 1000,
  },
  ssl: true,
  debug: false
})

module.exports = knex;
