const express = require("express");
const App = express();
const BlogRoute = require("./BlogRoute");
App.use("/api/main",BlogRoute); 
App.get("/", (req, res) => {
    res.send("This is my Home Page");  
})

App.get("/post/data", (req, res) => {
    res.send("Posting Data in Post...");
})
App.listen(4001, () => {
    try {
        console.log("This file is running on Port 4001");
    }
    catch (err) {
        console.log("Error", err);
    }
})