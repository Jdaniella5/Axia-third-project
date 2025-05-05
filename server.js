const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const nodemon = require("nodemon");
require("dotenv").config();
const webtoken = require("jsonwebtoken");

const user_routes = require("./routes/useraxiaroutes");
const kycroutes = require("./routes/kycroute");
const postRoutes = require("./routes/postaxiaroutes");

const app = express()
app.use(express.json());
app.use(cors())

const PORT= process.env.PORT || 1000;
app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`)})

//mongoose connect
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo connected sucessfully"))
.catch((err) => console.error("Connection failed", err));

//routes api
app.use("/api/useraxiaroutes", user_routes);
app.use("/api/kycroute", kycroutes);
app.use("/api/postaxiaroutes", postRoutes);