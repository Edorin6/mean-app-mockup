const express = require('express')
const mongoose = require('mongoose')
const config = require('../config')
const Posts = require('../controllers/Posts')

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

// post routes
router.get('/posts', (req, res) => Posts.getAll(req, res))
router.post('/posts', (req, res) => Posts.add(req, res))

module.exports = router