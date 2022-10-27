// // here we will implement the logic of signing in and signing up the user

// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../Models/user.js';

// export const signin = async(req,res) => {
//     const {email, password} = req.body; // Note that whenever we have a post request, we are getting the contents from req.body

//     try {
//         const existingUser = User.findOne({email});

//         if(!existingUser) return res.status(404).json({message:"User does not exist. Create a new account"});

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

//         if(!isPasswordCorrect) return res.status(400).json({message:"Incorrect password. Please try again"});

//         const token = jwt.sign({email : existingUser.email , id : existingUser._id},'test',{expiresIn : "12h"}); // normally the secret key( the second parameter ) is kept in an env file

//         res.status(200).json({result : existingUser, token});
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : "Something went wrong!"});
//     }
// }

// export const signup = async(req,res) => {
//     const { email, password, confirmPassword, firstName, lastName } = req.body;

//     try {
//         const checkExistingUser = User.findOne({email});
    
//         if(checkExistingUser) return res.status(400).json({message: 'User already exists!'});
    
//         if(password !== confirmPassword) return res.status(400).json({message : 'The passwords do not match'});

//         const hashedPassword = bcrypt.hash(password, 12);

//         const result = User.create({email, password : hashedPassword, name : `${firstName} ${lastName}`});

//         const token = jwt.sign({email : result.email, id : result._id  }, 'test',{expiresIn : "12h" });

//         res.status(200).json({result , token});
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : "Something went wrong!"});
//     }

    
// }
