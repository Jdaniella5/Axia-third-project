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
        const hashed_password = await bcrypt.hash(password, salt);
        const newuser = new Useraxia({ username, email, password: hashedPassword });
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
        const user = await Useraxia.findOne({ email });
        if(!user) return res.status(400).json({ message: "User not found!" });
        const aMatch = await bcrypt.compare(password, user.password);
        if(!aMatch) return res.status(400).json({ message: "Invalid password" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30 mins" });
        res.status(200).json({ message: err.message });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

//DELETE USERDATA
exports.delete_user = async (req, res) => {
    try {
        const user = await Useraxia.findById(req.user.id);
        if(!user) return res.status(404).json({ message: "USER NOT FOUND!" });
        await Postaxia.deleteMany({ user: req.user.id });
        await Kyc.deleteOne({ user: req.user.id });
        await Useraxia.findByIdAndDelete(req.user.id);

        res.status(200).json({ message: "USER AND DATA DELETED!" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};