import User from "../models/user_models.js";


export const home = (req, res) => {
  res.send("Everything is fine in GET");
};

// ------------------ CREATE USER ------------------
export const createUser = async (req, res) => {
  try {
    const { name, username, age, email } = req.body;

    const newUser = await User.create({ name, username, age, email });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email or Username already exists",
      });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ------------------ GET ALL USERS ------------------
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ------------------ GET USER BY USERNAME ------------------
export const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ------------------ UPDATE USER ------------------
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndUpdate(
      id,
      { name: req.body.name },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ------------------ DELETE USER ------------------
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};
