const express = require('express')
const mongoose = require('mongoose')
const config = require('../config')
const Post = require('../models/post')

// initialize server router
const router = express.Router()

// override default promise deprecation
mongoose.Promise = global.Promise

// connect to database
mongoose.connect(config.database, (err) => {
    if(err) {
        console.log('Database connection failed!')
        console.log(err)
    } else {
        console.log('Database connection successful!')
    }
})

// posts
router.get('/posts', (req, res) => Post.getAll(req, res))
router.post('/posts', (req, res) => Post.add(req, res))

module.exports = router