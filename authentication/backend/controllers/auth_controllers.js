import generate_password from "../config/tokens.js";
import User from "../models/user_models.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, username } = req.body;

    // Step 1: Validate all fields
    if (!firstname || !lastname || !email || !password || !username) {
      return res.status(400).json({
        message: "Please enter all required details",
      });
    }

    // Step 2: Check if email already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Step 3: Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Step 4: Create user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
      username,
    });

    let token = generate_password(user._id);
//passing in cookie 
   res.cookie("token", token, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production",
     sameSite: "strict",
     maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
   });

   // to fully package install cookie parser in middleware 


    return res.status(201).json({
      message: "User created successfully",
      user: {
        firstname,
        lastname,
        email,
        username,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong in signup controller",
      error: error.message,
    });
  }
};


export const login = async (req,res) =>{
  try {
    const { email, password, username } = req.body;

    // Step 1: enter email,username and password
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter all required details",
      });
    }

    // step 2 existing user check
    let existingUser =  await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(500)
        .json({ message: "user not exist please sign up first " });
    }
    //  step-3 // compare password using bcrypt

    let match = await bcrypt.compare(password, existingUser.password);
    if (!match) {
      return res.status(400).json({ message: "password is incorrect" });
    }

    // step 4 -- generate token and parse them

    let token = generate_password(existingUser._id);
    //passing in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // to fully package install cookie parser in middleware

    res.status(200).json({ message: "user succesfully login ",
      user:{
          firstname:existingUser.firstname,
          lastname:existingUser.lastname,
          email:existingUser.email,
          username:existingUser.username
      }
     });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }

}


export const logout = async (req,res)=>{
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "User successfully logged out",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong while logging out",
      error: error.message,
    });
  }
}