const express = require("express");
var cors = require('cors')
const rootRouter= require("./routes/index");
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",rootRouter);


module.exports= app;