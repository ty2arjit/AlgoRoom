import User from '../models/userSchema.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Sign Up

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if(user) {
      res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User created successfully" });

  } catch( error ) {
    res.status(500).json({ error: error.message });
  }
}

// Login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
      res.status(400).json({ error: "User doesn't exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({message: "Login successful", token });
    
  } catch( error ) {
    res.status(500).json({ error: error.message });
  }
}