import { app } from "./app.js";
import { connectDB } from "./db/db.js";
import dotenv  from "dotenv"


dotenv.config({
    path : "./env"
})

connectDB().then(()=>{
    app.on("error", (error)=>{
     console.log(error)
     throw error
    })
    app.listen(process.env.PORT, ()=>{
    console.log("express started listning")
    })
}).catch((err)=>{
    console.log("db connection error", err)
})