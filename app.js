"use strict";

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.send({
        greetings: 'Hello World!!!'
    })
});

app.listen(PORT, ()=>{
    console.log(`Application is listening to PORT - ${PORT}`);
})
