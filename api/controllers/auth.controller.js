import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken'
export const register = async(req,res)=>{

  try {
    
    const {username,email,password} = req.body;
    //    hash the password 
    const hashedPassword  = await bcrypt.hash(password,10);
    console.log(hashedPassword)
    //    create a new user
    const newUser = await prisma.user.create({data:{username,email,password:hashedPassword}});
    res.status(201).json({message:"User created successfully",user:{id:newUser.id,username:newUser.username,email:newUser.email}});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Something went wrong while creating user",error:error.message});
  }
  }

export const login = async(req,res)=>{
   try {
    const {username,password} = req.body;
    //check if user is there or not
    const user  = await prisma.user.findUnique({where:{username}});
    if(!user){
      return res.status(404).json({message:"User not found!"});
    }
    //check if the password is correct 
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(401).json({message:"Invalid credentials!"});
    }
   const COOKIE_AGE = 1000*60*60*24*7
    //generate cookie token and send to the user
    const token = jwt.sign({
      id:user.id,
    },process.env.JWT_SECRET,{
      expiresIn:COOKIE_AGE
      // expiresIn:parseInt(process.env.COOKIE_AGE,10)
    })
    res.cookie("token",token,{
      httpOnly:true,
      //secure:true, //only works on https
      maxAge:COOKIE_AGE,
      // maxAge:parseInt(process.env.COOKIE_AGE,10),
    }).status(200).json({message:"Login successful"})
    // reading the cookie like this wouldbeharder hence we use JWT AND COOKIE PARSER
    // res.setHeader('Set-Cookie',"test="+"myValue").send("success");
   } catch (error) {
    console.log(error);
    res.status(500).json({message:"Something went wrong while login",error:error.message});
   }
}

export const logout = (req,res)=>{
try {
  if(!req.cookies.token){
    return res.status(400).json({message:"User is not logged in!"});
  }
  res.clearCookie("token").status(200).json({message:"Logged out successfully"});
} catch (error) {
  console.log(error);
  res.status(500).json({message:"Something went wrong while logout",error:error.message});
}
}
