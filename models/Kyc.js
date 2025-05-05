const mongoose = require("mongoose");

const KycSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        documentType: { type: String, required: true },
        documentNumber: { type: String, required: true, unique: true },
        verified: { type: Boolean, default: false }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Kyc", KycSchema);