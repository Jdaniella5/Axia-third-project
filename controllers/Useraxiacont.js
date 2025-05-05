const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usera = require("../models/Useraxia");
const Kyc = require("../models/Kyc");
const  Posta = require("../models/Postaxia");
const Useraxia = require("../models/Useraxia");
const Postaxia = require("../models/Postaxia");

//TO REGISTER
exports.register = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newuser = new User({ username, email, password: hashedPassword });
        await newuser.save();
        res.status(201).json ({ message: "Registered sucessfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//TO LOGIN
exports.login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message: "User not found!" });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: "Invalid password" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30 mins" });
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

//DELETE USERDATA
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({ message: "USER NOT FOUND!" });
        await Post.deleteMany({ user: req.user.id });
        await Kyc.deleteOne({ user: req.user.id });
        await User.findByIdAndDelete(req.user.id);

        res.status(200).json({ message: "USER AND DATA DELETED!" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};