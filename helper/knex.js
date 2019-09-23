const knex = require('knex')({

  client: 'postgresql',
  connection: {

    host : '206.189.141.120',
    user : 'postgres',
    password : 'postgres',
    database : 'instructor-report'
  },
  pool: {
    min: 1,
    max: 2,
  },
  ssl: true,
  debug: false
})

module.exports = knex;
