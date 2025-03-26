require("dotenv").config();
const express = require('express');
const mongoose=require("mongoose");
const notesRouter = require("./Notes/routes");
const homeRouter = require("./home/routes");
const connectionDB = require("./config/db");
const app = express();
const port = process.env.PORT || 8001;

// connect to DB
connectionDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/",homeRouter)
app.use("/api/note", notesRouter);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})