const express = require('express');
const router = express.Router();


const knex = require('../helper/knex');

// get lecturer wise class

router.get('/api/get_users', async(req, res) => {

    const result = await knex("public.lecture").transacting(trx)
        .select("*")
        .where("name", '=', req.query.name);

        // console.log(result[0].id);

    const resultDetail = await knex("public.lecturer_class_report").transacting(trx)
    .select("*")
    .where("lecturer_id", '=',result[0].id);

    return res
        .status(200)
        .send({status: 'SUCCESS', resultDetail});

})

module.exports = router;