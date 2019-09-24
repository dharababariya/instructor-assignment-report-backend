const express = require('express');
const router = express.Router();


const knex = require('../helper/knex');

// get lecturer wise class

router.get('/api/get_users', async(req, res ) => {
    try {
        
    

    const result = await knex("public.lecture")
        .select("*")
        .where("name", '=', req.params.name);

        console.log(result)

       console.log(result[0].id);

    const resultDetail = await knex("public.lecturer_class_report")
    .where("lecturer_id", '=',result[0].id);



    console.log(resultDetail)

    return res
        .status(200)
        .send({status: 'SUCCESS', resultDetail});


    } catch (error) {
        console.error(error)
        
    }
})

module.exports = router;