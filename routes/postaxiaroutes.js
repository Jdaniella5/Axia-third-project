const express = require("express");
const router = express.Router();
const postController = require("../controllers/Postaxiacont");
const middle_ware = require("../middleware/authaxia");
router.post("/create", middle_ware, postController.createPost);

module.exports = router;
