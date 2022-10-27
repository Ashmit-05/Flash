import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    message :{
        type : String,
        required : true
    },
    creator : {
        type : String,
        required : true
    },
    tags : [String],
    selectedFile : {
        type : String,
        required : true
    },
    likes : {
        type:[String],
        default:[]
    },
    createdAt : {
        required : true,
        type:Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;