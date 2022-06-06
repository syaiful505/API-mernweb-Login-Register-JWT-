const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const users = require('../model/users/UsersSchema');

// Controllers Users 
exports.createUser = async function (req, res) {
    try {
      // Simpan dari Body atau data 
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      // Simpan kedalam variable create user 
      const createUser = new users({
          username : username,
          email : email,
          password : password,
      });
      // Simpan kedalam model schema untuk dilanjutkan ke DB 
      const created = await createUser.save();
      console.debug(created);
      res.send("Registed Happy Sharing");
    } catch (err) {
      console.debug(`Error Insert User : ${err.message}`);    
    }
};

exports.getLogin = async function (req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      // Cari jika user ada
      const user = await users.findOne({email : email});
      if(user){
        // Verfikasi Password
        const isMatch = await bcryptjs.compare(password, user.password);
        if(isMatch){
            //generate token kalau user ditemukan
            const token = await user.generateToken();
            res.cookie("jwt", token, {
              // Jadikan token hanya bisa digunakan sehari
              expires : new Date(Date.now() + 86400000),
              httpOnly : true
            })
            res.send("Logged In")
        } else {
            res.send("Invalid Credentials");
        }
      } else {
          res.send("Invalid Credentials");
      }
    } catch (err) {
      console.debug(`Error Login Failed : ${err.message}`)
    }
};
exports.logout = async function (req, res) {
    try {
      res.clearCookie("jwt", {path : '/'})
      res.send("User Logout")
    } catch(err) {
      console.debug(`Error logout data : ${err.message}`)    
    }
};

exports.getUsers = async function (req, res) {
    try {
        const result = await users.find();
        res.send(result);
    } catch (err) {
        console.debug(`Error Read User : ${err.message}`);
    }
};
