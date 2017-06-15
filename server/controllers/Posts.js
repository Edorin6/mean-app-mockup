const Post = require('../models/Post')

// PostsController
module.exports = {
    
    // create Post
    add: function(req, res) {
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
    },

    // retrieve all Posts
    getAll: function(req, res) {
        Post.find((err, posts) => {
            if(err) {
                console.log(err)
                res.json({success: false, message: 'Can\'t get posts'})
            } else {
                res.json({success: true, posts: posts})
            }
        })
    }

}