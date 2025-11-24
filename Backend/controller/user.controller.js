import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

const normalizeEmail = (email = "") => email.trim().toLowerCase();

const formatUserResponse = (user) => ({
    id: user._id,
    fullname: user.fullname,
    email: user.email,
});

export const signup = async(req, res) => {
    try {
        const fullname = req.body.fullname?.trim();
        const email = normalizeEmail(req.body.email);
        const password = req.body.password?.trim();

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "Full name, email, and password are required." });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists." });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const createdUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "User created successfully.",
            user: formatUserResponse(createdUser),
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

export const login = async(req, res) => {
    try {
        const email = normalizeEmail(req.body.email);
        const password = req.body.password?.trim();

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        return res.status(200).json({
            message: "Login successful.",
            user: formatUserResponse(user),
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};