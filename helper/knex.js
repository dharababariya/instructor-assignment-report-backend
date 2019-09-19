const knex = require('knex')({

  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 1,
    max: 2,
  },
  ssl: true,
  debug: false
})

module.exports = knex;
