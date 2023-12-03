const express = require('express');


const db = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator');
const router = express.Router();

router.post("/register",async(req,res)=>{
    const { username, email, password } = req.body;
    try{

        // const existingUser = await db.oneOrNone(`SELECT * FROM users WHERE email=${email}`);
        // if (existingUser) {
        //     return res.status(400).json({ message: 'User with this email already exists.' });
        //   }
          const hashedPassword = await bcrypt.hash(password, 10);
          await db.none('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
          const newUser = await db.one('SELECT * FROM users WHERE email = $1', [email]);
          const token = jwt.sign({ userId: newUser.id }, process.env.JWT_TOKEN, {
            expiresIn: '1h',
          });
          res.status(201).json({ message: 'User registered successfully', token });
    }catch(err){
      console.log(err)
        res.status(400).json({error:err})
    }
})

router.post("/login",async(req,res)=>{
    const {email, password } = req.body;
    try{
        const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
    
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password.' });
        }
    
        // Verify the password
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid email or password.' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, username: user.username },process.env.JWT_TOKEN, {
          expiresIn: '1h',
        });
    
        res.json({ message: 'Login successful', token });
    }catch(err){
      console.log(err)
        res.status(400).json({error:err})
    }
})


module.exports=router;