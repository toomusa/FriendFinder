const express = require("express");
const path = require("path");
const friends = require("./app/data/friends.js");
// const jsdom = require("jsdom")
// const $ = require("jquery");

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use(express.json());

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.post("/api/survey", (req, res) => {
    let newUser = {
        name: req.body.name,
        photo: req.body.photo,
        scores: [parseInt(req.body.A1), parseInt(req.body.A2), parseInt(req.body.A3), parseInt(req.body.A4), parseInt(req.body.A5), 
                parseInt(req.body.A6), parseInt(req.body.A7), parseInt(req.body.A8), parseInt(req.body.A9), parseInt(req.body.A10)]
    }
    let bestMatch = compareScores(newUser);
    // let results = [{...newUser}, {...bestMatch}]
    // res.json(results);
    res.end();
})


const compareScores = (newUser) => {
    let userOptions = [];
    friends.profiles.forEach(user => {
        let scoreComparison = 0;
        for (let i = 0; i < user.scores.length; i++) {
            scoreComparison += Math.abs(user.scores[i] - newUser.scores[i]);
        }
        userOptions.push(scoreComparison);
    })
    let closestMatch = Math.min(...userOptions);
    let matchingProfile = userOptions.indexOf(closestMatch);
    return friends.profiles[matchingProfile];
}


app.listen(PORT, () => {console.log("Connected at: " + PORT)})