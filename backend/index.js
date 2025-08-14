// const express = require('express'); 
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import cookieParser  from "cookie-parser";
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8180;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());


//routes 
app.use ("/api/v1/user",userRoute);

app.listen(PORT , ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})
