import express from "express"
const app = express();
import { configDotenv } from "dotenv"
configDotenv();
import connectDb from "./configs/dbConnect.js";






const PORT = process.env.PORT || 5000;

connectDb().then((res) => {
    if(res){
 app.listen(PORT, () => {
        console.log("server listening at port", PORT);
    })
    }
   
}).catch((err)=>{
    console.log(err)
})


