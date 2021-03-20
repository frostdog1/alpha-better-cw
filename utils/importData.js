require('dotenv').config({path: './config.env'});

// create file module
//const fs = require('fs');

//const Post = require('../models/Posts');
const connectDB = require('../config/db');

connectDB();

//const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));