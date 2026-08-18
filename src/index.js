// require('dotenv').config({path: './env'})
// import dotenv from "dotenv"


// import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'
// })
// connectDB()

import dns from "dns";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// 1. Force Node to use Google DNS (Fixes Reliance/Jio ECONNREFUSED error)
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// 2. Explicitly load .env from root
dotenv.config({
    path: './.env'
});

connectDB();





// ye 1st aproach hai IFEEE se banante hai fun aur DB and server conect karte hai 

// 2nd approach DB folder 
/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()

// database connect karenge indexedDB.js se 

// esse bhi kar sakte hai 
// function connectDB(){}

// connectDB()

// 2nd >  IFEE wala function imeditally invok wala se kare 
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // maan lo DB connect ke baad express ka kuch issue aa gya phir 
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listining on PORT ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/