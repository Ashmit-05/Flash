/**
 * This is where we will implement the logic behind posts.
 */

import mongoose from "mongoose";
import PostMessage from "../Models/postMessage.js";

export const getPosts = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const updatePost = async(req,res) => {
    const { id : _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post exists!');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});

    res.json(updatedPost);
}

export const deletePost = async(req,res) => {
    const {id : _id} = req.params; // const {id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post exists!');

    await PostMessage.findByIdAndDelete(_id,{...post,_id});

    res.json('Successfully deleted the post');
}

export const likePost = async(req,res) => {
    const {id : _id} = req.params;

    if(!req.userId) return res.json({message : 'Unauthenticated user!'});   

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post exists!');
    
    const post = await PostMessage.findById(_id);
    const index = post.likes.find((id) => id === String(req.userId));

    if(index === -1){
        // like the post
        post.likes.push(req.userId);
    } else {
        // dislike the post
        post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post , { new : true});

    res.json(updatedPost);
}