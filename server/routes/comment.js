const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Create a comment on a post
router.post('/:postId', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      const comment = new Comment({
        content: req.body.content,
        postId: req.params.postId,
        userId: req.body.userId // Assuming userId is provided in the request body
      });
  
      const savedComment = await comment.save();
  
      // Add comment to post's comment array
      post.comments.push(savedComment);
      await post.save();
  
      res.status(201).json(savedComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

// Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().populate('userId', 'username').populate('postId', 'title');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update a comment
router.patch('/:id', getComment, async (req, res) => {
  if (req.body.content != null) {
    res.comment.content = req.body.content;
  }
  try {
    const updatedComment = await res.comment.save();
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getComment(req, res, next) {
  let comment;
  try {
    comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: 'Comment not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.comment = comment;
  next();
}

module.exports = router;