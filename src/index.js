import { app } from "./app.js";
import { connectDB } from "./db/db.js";
import { fileURLToPath } from "url";
import dotenv  from "dotenv"
import Listing from "./models/listngs.model.js";
import { initData } from "./init/index.js";
import { getListings } from "./controllers/listingController.js";
import  path from 'path'


const __filename  = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({
    path : "./env"
})



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))

connectDB().then(()=>{
    app.on("error", (error)=>{
     console.log(error)
     throw error
    })
    app.listen(process.env.PORT, ()=>{
    console.log("express started listning", process.env.PORT)
    })

    initData()
    .then(()=> {console.log("data inserted succefully")})
    .catch((err)=> {console.log("data insertion failed", err)})

}).catch((err)=>{
    console.log("db connection error", err)
})

app.get("/",(req, res)=>{
    res.send("app is working")
})
app.get("/listings", getListings)


