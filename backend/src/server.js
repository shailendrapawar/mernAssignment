import express from "express"
const app = express();
import { configDotenv } from "dotenv"
configDotenv();
import connectDb from "./configs/dbConnect.js";
import cors from "cors"


// importing routes ============
import userRouter from "./routes/userRoutes.js";


app.use(cors({
    origin:"*"
}))

app.use(express.json());

app.use("/user",userRouter)





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


