const app=require("./app.js")
const PORT=process.env.PORT||3000;

const startServer=()=>{
    app.listen(PORT,()=>{
        console.log("process running on Port:",PORT);
    });
    process.on('uncaughtException',(err)=>{
        console.log("Uncaught Exception",err);
        process.exit(1);
    });
}
startServer();

