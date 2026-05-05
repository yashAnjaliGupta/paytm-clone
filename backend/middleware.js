const {JWT_SECRET}= require("./config");
const jwt= require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const authToken= req.headers.authorization;
    if(!authToken){
        res.status(411).json({
            message: 'user not signed in'
        });
        return;
    }
    const token = authToken.split(' ')[1];
    try{
        const decode=jwt.verify(token,JWT_SECRET);
        req.userId=decode.userId;
        next();
    }catch(err){
        res.status(411).json({
            message: err
        });
    }
}
module.exports=authMiddleware;