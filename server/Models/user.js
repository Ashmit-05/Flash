import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    },
    id : {
        required : true,
        type : String
    }
})

export default mongoose.model("User",userSchema);