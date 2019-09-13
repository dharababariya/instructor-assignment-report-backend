// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'instructor-assignment-report.cnwis3jkhsul.us-east-2.rds.amazonaws.com',
//         user: 'postgres',
//         password: 'postgres',
//         database: 'instructor_report'
//     }
// });
// module.exports = knex;

// const knex = require('knex')({

//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     pool: {
//       min: 2,
//       max: 10
//     },
//     ssl: true,
//     debug: false
//   })

const config = {
  host: 'instructor-assignment-report.cnwis3jkhsul.us-east-2.rds.amazonaws.com',
  user: 'postgres',
  password: 'postgres',
  database: 'instructor_report',
};

// Connect to the database
const knex = require('knex')({
  client: 'pg',
  connection: config,
});


//expose knex connection object;
module.exports = knex;