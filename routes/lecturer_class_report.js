const express = require('express');
const router = express.Router();
const csv = require('csvtojson')
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage()
})

const knex = require('../helper/knex');

router.post('/api/csv_upload', upload.single('myfile'), async(req, res, next) => {

    try {

        //csv file uplode

        const csv_file = String(req.file.buffer);

        //content data

        const data = {
            input: {
                csv_file
            },
            derived: {}
        };

        //covert csv to json

        const new_users = await csv_to_json(data);

        // take one data in new_user
        let lecturer_id = 0;

        for (let i = 0; i < new_users.length; i++) {
            // if(i > 1) continue;

            const add_users = new_users[i];
            // console.log(add_users.Class_Date);
            let classDate = add_users.Class_Date.toLowerCase();
            if(classDate.includes('inactive!') ||  classDate.includes(','))
            {

                // const result = await knex("public.authors")
                // .select("*")
                // .where("name", '=', req.query.name);
                // lecturer_id =  result[0].id

                let insertedId = await knex("public.lecture")
                    .insert({
                    name: add_users.Class_Date
                }).returning('id');
                lecturer_id = parseInt(insertedId.toString());

            }


            const result = await knex("public.lecturer_class_report")
                .insert({

                class_date: add_users.Class_Date,
                section: add_users.Section,
                school_or_customer_name_room: add_users.School_or_Customer_Name_Room,
                zone: add_users.Zone,
                program: add_users.Program,
                time_range: add_users.Time_Range,
                kit_take_home: add_users.Kit_Take_Home,
                role: add_users.Role,
                reg: add_users.Regd,
                lecturer_id: lecturer_id
            }).returning('*');

            // if(i === 25)
            // break;

        }

        res
            .status(200)
            .send({status: 'SUCCESS', message: 'Successfully Added File ✅️' })
            

    } catch (error) {
            console.error(error)
         res
            .status(400)
            .send({status: '⚠️ Failure',
                    message:error
                })
            

    }

});
//csv to json
const csv_to_json = async(data) => {

    const csv_rows = await csv({noheader: false, trim: true, output: "json"}).fromString(data.input.csv_file)

    return csv_rows;

};



module.exports = router; 