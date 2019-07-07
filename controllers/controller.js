
const friends = require("../app/data/friends.js");
const path = require("path");

module.exports = {
    homePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    },
    surveyPage: (req, res) => {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    },
    profilesData: (req, res) => {
        res.json(friends.profiles);
    },
    compareScores: (newUser) => {
        return new Promise ((resolve, reject) => {
            if (!newUser) reject();
            let userOptions = [];
            profiles.forEach(user => {
                let scoreComparison = 0;
                for (let i = 0; i < user.scores.length; i++) {
                    scoreComparison += Math.abs(user.scores[i] - newUser.scores[i]);
                }
                userOptions.push(scoreComparison);
            })
            let closestMatch = Math.min(...userOptions);
            let matchingProfile = userOptions.indexOf(closestMatch);
            resolve(profiles[matchingProfile]);
        })
    },
    friendsData: async (req, res) => {
        friends.profiles.push(req);
        console.log(friends.profiles);
        res.json(friends.profiles);
    }
}
