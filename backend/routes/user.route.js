const express=require("express");
const { User,Account }= require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {JWT_SECRET}= require("../config");
const authMiddleware = require("../middleware");

const router=express.Router();

const signupBody=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string().min(6)
});

const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6)
});

const userUpdateBody=zod.object({
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
    password:zod.string().min(6).optional()
});

router.post("/signup",async(req,res)=>{
    // console.log(req.body);
    const {success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const existingUser=await User.findOne({
        username:req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken"
        })
    }
    const user= await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName: req.body.lastName
    });
    const userId= user._id;
      await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token=jwt.sign({userId},JWT_SECRET);
    res.status(200).json({
        message: "User created successfully",
        token:token
    })
});
router.post("/signin",async(req,res)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user= await User.findOne({
        username:req.body.username
    });
    if(!user){
        res.status(411).json({
            message:"User doesnot exist"
        });
    }
    if(user.password!=req.body.password){
        res.status(411).json({
            message:"Incorrect Password"
        });
    }
    const userId=user._id
    const token=jwt.sign({userId},JWT_SECRET);
    res.status(200).json({
        message: "User login successfully",
        token:token
    })
});

router.put("/",authMiddleware,async(req,res)=>{
    const {success}=userUpdateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    res.status(200).json({
        message:"Updates successfully"
    })
});

router.get("/bulk",async (req,res)=>{
    const filter=req.query.filter||"";

    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },
        {
            lastName:{
                "$regex":filter
            }
        }
    ]});
    res.status(200).json({
        user:users.map(user=>({
            _id:user._id,
            username:user.username,
            firstName: user.firstName,
            lastName:user.lastName
        }))
    })
});

router.get("/me",authMiddleware, async (req,res)=>{
    const user = await User.findById(req.userId);
    res.status(200).json({
        username:user.username
    })
})

module.exports=router;