import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt"

class UserController {

    static register = async (req, res) => {

        try {

            const { username, password } = req.body;

            if (!username || !password) {
                res.status(400).json({
                    msg: "fileds are missing",
                    succes: false
                })
            }
            if (username.length < 4 || username.length > 20) {
                res.status(400).json({
                    msg: "username not within constraints 4-20",
                    succes: false
                })
            }
            if (!username || /\s/.test(username)) {
                return res.status(400).json({ error: "Username must not contain whitespace." });
            }


            // check for if username already exists
            const isExist = await UserModel.findOne({ username });

            if (isExist) {
                res.status(400).json({
                    msg: "username already exists",
                    succes: false
                })
            }


            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hashSync(password, salt);

            const newUser = new UserModel({
                username: username.toLowerCase(),
                password: hashPass
            })

            await newUser.save();

            return res.status(201).json({
                msg: "user created",
                succes: true
            })


        } catch (err) {
            console.log("error in resgistering user", err);

            res.status(500).json({
                msg: "internal server error",
                succes: false
            })
        }



    }

    static login = async (req,res) => {

        try {

            const { username, password } = req.body;

            if (!username || !password) {
                res.status(400).json({
                    msg: "fileds are missing",
                    succes: false
                })
            }

            //seraching for user ==============
            const keyword=username.toLowerCase();
            const isExist = await UserModel.findOne({ username:keyword });

            if (!isExist) {
                res.status(400).json({
                    msg: "user does'nt exist",
                    succes: false
                })
            }

            const isPassMatch = await bcrypt.compare(password, isExist.password);

            if (!isPassMatch) {
                res.status(400).json({
                    msg: "wrong credentials",
                    succes: false
                })
            }

            res.status(200).json({
                msg: "login successful",
                succes: true
            })

        } catch (err) {
            console.log("error in login");
            res.status(500).json({
                msg: "internal server error",
                succes: false
            })
        }
    }

    static getUsername=async(req,res)=>{

    }


    static updateUser=async(req,res)=>{
        
    }



}

export default UserController;