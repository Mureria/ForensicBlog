const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Create a post
router.post('/', async (req, res) => {
  try {
    const { user, content, title, category } = req.body;

    // Check if all required fields are provided
    if (!user || !content || !title || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username title')
                                   .populate('category', 'name')
                                   .populate('comments', 'content');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Get comments for a specific post
router.get('/:postId/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate('userId', 'username profilePicture').populate('postId', 'title');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get the number of comments for a specific post
router.get('/:postId/comments/count', async (req, res) => {
  try {
    const count = await Comment.countDocuments({ postId: req.params.postId });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
                            .populate('user', 'username title')
                            .populate('category', 'name');
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update post
router.put('/:id', getPost, async (req, res) => {
  if (req.body.content != null) {
    res.post.content = req.body.content;
  }
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.image != null) {
    res.post.image = req.body.image;
  }
  if (req.body.category != null) {
    res.post.category = req.body.category;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete post
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id).populate('user', 'username title').populate('category', 'name');
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post' });
    }
    res.post = post;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;