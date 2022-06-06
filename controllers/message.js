const express = require('express');
const msg = require('../model/msgSchema');

exports.messages = async function (req, res) {
    try {
        // Get Body Or Data 
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new msg({
            name : name,
            email : email,
            message : message,
        });
        const created = await sendMsg.save();
        console.debug(created);
        res.send("Sent")
    } catch(err) {
        console.debug(`Message Not Launch : ${err.message}`);
    }
};
exports.getMessage = async function (req, res) {
    try {
        const result = await msg.find();
        res.send(result);
    } catch (err) {
        console.debug(`Error Read User : ${err.message}`);
    }
};

