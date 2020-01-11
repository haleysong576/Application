const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets the posts 
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find({"required": false})
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});
//{_id: req.params.postId}, 
//req.body.required
//:postId
router.patch('/', async (req,res) => {
    try {
        const updatedPost = await Post.updateMany(
             
            {$set: {required: true}}
            
        );
        res.json(updatedPost);
    }catch (err){ 
        res.json({message: err });
    }
});

module.exports = router;
