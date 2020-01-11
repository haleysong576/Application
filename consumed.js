const express = require('express');
const router = express.Router();
const Post = require('../models/Consume');

//gets the posts 
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        food: req.body.food,
        Amount: req.body.Amount
    }); 
    
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
    
        
});
//{_id: req.params.postId}
//:postId
router.delete('/', async (req,res) => {
    try{ 
        const removedPost = await Post.remove()
        res.json(removedPost);
    } catch (err){
        res.json({message: err}); 
    }
});


module.exports = router;
