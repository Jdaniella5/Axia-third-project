const Postaxia = require("../models/Postaxia");
const post = require("../models/Postaxia");

exports.createPost = async (req, res) => {
try {
    const { title, content } = req.body;
    const newPost = new Post({ user: req.user.id, title, content });

    await newPost.save();
    res.status(201).jon(newPost);
} catch (err) {
    res.status(500).json({ message: err.message });
}    
};