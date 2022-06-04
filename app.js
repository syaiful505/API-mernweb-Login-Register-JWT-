// Import All dependecies
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const Router = require('./routes/route');
// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./conn');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use("/", Router);
// Run Server
app.listen(process.env.PORT, () => {
    console.debug("Server Is Runing")
})
