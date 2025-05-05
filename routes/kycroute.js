const express = require("express");
const router = express.Router();
const kycController = require("../controllers/Kyccont");
const auth_middleware = require("../middleware/authaxia");
router.post("/create", auth_middleware, kycController.createkyc);

module.exports = router;