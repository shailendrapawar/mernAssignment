import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    profilePhoto: {
        type: String
    },
    username: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },

    // profession details======
    profession: {
        type: String,
        enum:["student","developer","entrepreneur"]
        // required: true
    },
    companyName: {
        type: String,
        default: ""
    },
    // address ============
    address: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    state:{
        type: String,
        default: ""
    },
    city:{
        type: String,
        default: ""
    },

    //  others=======
    subscription:{
        type: String,
        enum:["basic","pro","enterprise"]
    },
    newsletter:{
        type:Boolean,
    }
})

const UserModel= mongoose.model("User",userSchema);
export default UserModel;