const express = require("express");
const router = express.Router();
const userController = require("../controllers/Useraxiacont");
const mid_ware = require("../middleware/authaxia");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/delete", mid_ware, userController.deleteUser);
