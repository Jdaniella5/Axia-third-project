const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
        title: { type: String, required: true },
        content: { type: String, required: true }
    },
    { timestamps: true}
);
module.exports = mongoose.model("Post", PostSchema);