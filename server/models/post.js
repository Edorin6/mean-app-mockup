const mongoose = require('mongoose')

// Schema
const PostSchema = mongoose.Schema({
    title: String,
    description: String
})

// export 
const Post = module.exports = mongoose.model('Post', PostSchema)
