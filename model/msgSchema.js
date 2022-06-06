const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path : './config.env'});
require('../conn');

// Message Schema or Document Structure
const msgSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})

// Created Model
const Message = new mongoose.model("MESSAGE", msgSchema);
module.exports = Message;
