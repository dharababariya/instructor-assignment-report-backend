const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'instructor-assignment-report.cnwis3jkhsul.us-east-2.rds.amazonaws.com',
        user: 'postgres',
        password: 'postgres',
        database: 'instructor_report'
    }
});
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


//expose knex connection object;
module.exports = knex;