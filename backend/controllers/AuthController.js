const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, phonenumber, createdAt } = req.body;

    // Input validation
    if (!email || !password || !username) {
      return res.status(400).json({ message: "Missing required fields", success: false });
    }

    // Check for existing user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already used", success: false });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      email,
      password: hashedPassword,
      username,
      phonenumber,
      createdAt
    });

    // Generate token and set cookie
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict"
    });

    res.status(201).json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};