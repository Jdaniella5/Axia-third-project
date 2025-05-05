const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    kyc: { type: mongoose.Schema.Types.ObjectId, ref: "Kyc" },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Postaxia" }]
},
{ timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);