import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app=express();
dotenv.config()
const port=process.env.PORT || 7000;
const MONGOURL=process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>{
    console.log("connected to mongo");
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    });
})
.catch((error)=>console.log(error));
