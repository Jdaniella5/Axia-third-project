const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const nodemon = require("nodemon");
require("dotenv").config();
const webtoken = require("jsonwebtoken");

const user_routes = require("../routes/useraxiaroutes.js");
const kycroutes = require("")

const app = express()
app.use(express.json());
app.use(cors());