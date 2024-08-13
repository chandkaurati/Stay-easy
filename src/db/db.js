import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

export async function connectDB() {
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
    console.log(`MONGO DB CONNECTED SUCCESFULLY, : ${connectionInstance.connection.host}`) 
    }catch (error) {
    console.log("MONGO DB CONNECTION FAILED:", error)
    }
}