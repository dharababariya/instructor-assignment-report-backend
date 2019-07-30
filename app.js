//Include module

const express = require('express');
const body_parser = require('body-parser');


//Ininitialize express
const app = express();


//middleware
app.use(body_parser.json());

// routes
 app.use('/v1', require('./routes/lecturer_class_report'));



app.listen(8000, () => {
    console.log('listen port 8000')
})