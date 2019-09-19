// const knex = require('knex')({
//     client: 'pg',
//     version: '7.2',
//     connection: {
//         host: '127.0.0.1',
//         user: 'postgres',
//         password: 'postgres',
//         database: 'instructor_report'
//     }
// });
// module.exports = knex;

const knex = require('knex')({

    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    ssl : true,
    debug: false
  

  })


//expose knex connection object;
module.exports = knex;
