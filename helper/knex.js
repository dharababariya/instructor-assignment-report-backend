const knex = require('knex')({

  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    "min": 2,
    "max": 6,
    "createTimeoutMillis": 3000,
    "acquireTimeoutMillis": 30000,
    "idleTimeoutMillis": 30000,
    "reapIntervalMillis": 1000,
    "createRetryIntervalMillis": 100,
    "propagateCreateError": false // <- default is true, set to false
  },
  ssl: true,
  debug: false
})

module.exports = knex;
