import User from "../models/User.models.js";
import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const userRouter = express.Router();

userRouter.post(
  "/loginuser",
  [
    body("email", "Email is not correct").isEmail(),
    body("password", "length more than or equal to 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    try {
        let userData = await User.findOne({email: req.body.email})
        if(!userData) {
          return res.status(404).json({ success: false, error: "Email not match!" });  
        }

        let validUser = await bcrypt.compare(req.body.password,userData.password)
        if(!validUser){
            return res.status(404).json({ success: false, message: "password not match!" });
        }

        //awt authentication 
        const payload = {
          user:{
            id:userData.id
          }
        }
        const authToken = jwt.sign(payload,process.env.JWTSECRET)

        return res.json({ success: true, authToken:authToken, message: "Login success!", id: userData._id});

    } catch (error) {
        return res.json({ success: false, error});
    }
  }
);

userRouter.post(
  "/createuser",
  [
    body("name", "length more than or equal to 2").isLength({ min: 2 }),
    body("email", "Email is not correct").isEmail(),
    body("password", "length more than or equal to 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    // hasing the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      return res.json({ success: false });
    }
  }
);

export default userRouter;
