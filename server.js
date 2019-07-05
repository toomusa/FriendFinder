const express = require("express");
const path = require("path");
const inquirer = require("inquirer");
const friends = require("./app/data/friends.js");

const app = express();
const PORT = proces.env.PORT || 7777;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.post("/survey", (req, res) => {
    let newUser = req.body;
    res.json(newUser);
})







app.listen(PORT, () => {console.log("Connected at: " + PORT)})