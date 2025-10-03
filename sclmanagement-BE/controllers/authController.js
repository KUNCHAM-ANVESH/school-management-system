const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { createUser, getUserByEmail } = require("../models/authModel");

// Loading env variables
dotenv.config();

// Controller method to  Register a new user
async function registerUser(req, res) {
  try {
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role)

    // Check if user already exists
    const existing = await getUserByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "Email already registered"});
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await createUser(name, email, hashedPassword, role);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Error in registerUser ----->", error.message);
    res.status(500).json({ message: "Internal server error occurred" });
  }
}

// Controller Method to Login user
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email. User not found." });
    }

    // Comparing the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error in loginUser ----->", error.message);
    res.status(500).json({ message: "Internal server error occurred" });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
