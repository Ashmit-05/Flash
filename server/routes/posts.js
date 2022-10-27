/**
 * This will only be used for routing.
 * No logical operations will be performed here.
 * This will only deal with request and response.
 */

import express from 'express';
import { getPosts,createPost,updatePost, deletePost,likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);

export default router;