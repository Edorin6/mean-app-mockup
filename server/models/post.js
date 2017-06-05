const mongoose = require('mongoose')

// Schema
const PostSchema = mongoose.Schema({
    title: String,
    description: String
})

// export 
const Post = module.exports = mongoose.model('Post', PostSchema)

// getAll()
module.exports.getAll = (req, res) => {
    Post.find((err, posts) => {
        if(err) {
            console.log(err)
            res.json({success: false, message: 'Can\'t get posts'})
        } else {
            res.json({success: true, posts: posts})
        }
    })
}

module.exports.add = (req, res) => {
    let newPost = new Post({
        title: req.body.title,
        description: req.body.description
    })
    newPost.save((err) => {
        if(err) {
            console.log(err)
            res.json({success: false, message: 'Can\'t add post'})
        } else {
            res.json({success: true, message: 'Post added'})
        }
    }) 
}
