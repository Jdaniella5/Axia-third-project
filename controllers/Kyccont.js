const Kyc = require("../models/Kyc");
const kyc = require("../models/Kyc");

exports.createkyc = async (req, res) => {
    try{
        const { document_type, document_number } = req.body;
        const existing_kyc = await Kyc.findOne({ user: req.user.id });
        if (existing_kyc) return res.status(400).json({ message: "KYC EXISTS!"});
        const new_kyc = new Kyc({ user: req.user.id, document_type, document_number });
        await new_kyc.save();
        res.status(201).json(new_kyc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};