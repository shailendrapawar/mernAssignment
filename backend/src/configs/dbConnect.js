import { configDotenv } from "dotenv"
configDotenv();
import mongoose from "mongoose";

const connectDb = async () => {

    try {
        const res = await mongoose.connect(process.env.MONGO_URL);
        if (res) {
            console.log("db connnected");
            return res;
        }
        return res
    } catch (err) {
        console.log(err)
    }
}
export default connectDb;