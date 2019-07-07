
const $ = require("jquery");

const profiles = [
    {
        name: "Kelly",
        photo: "http://lorempixel.com/200/200",
        scores: [7, 6, 2, 8, 9, 4, 3, 4, 5, 8]
    },
    {
        name: "Melly",
        photo: "http://lorempixel.com/200/200",
        scores: [4, 3, 8, 9, 5, 3, 1, 7, 5, 4]
    },
    {
        name: "Nelly",
        photo: "http://lorempixel.com/200/200",
        scores: [9, 6, 1, 3, 8, 7, 5, 4, 9, 6]
    },
    {
        name: "Jelly",
        photo: "http://lorempixel.com/200/200",
        scores: [2, 7, 6, 4, 8, 3, 6, 7, 9, 2]
    },
    {
        name: "Shelley",
        photo: "http://lorempixel.com/200/200",
        scores: [8, 7, 6, 3, 1, 6, 4, 9, 2, 7]
    },
    {
        name: "Relly",
        photo: "http://lorempixel.com/200/200",
        scores: [6, 3, 9, 8, 5, 7, 2, 4, 6, 7]
    },
    {
        name: "Telly",
        photo: "http://lorempixel.com/200/200",
        scores: [2, 9, 3, 5, 6, 4, 8, 7, 2, 1]
    },
    {
        name: "Belly",
        photo: "http://lorempixel.com/200/200",
        scores: [5, 9, 9, 7, 2, 1, 5, 3, 1, 3]
    },
    {
        name: "Zelly",
        photo: "http://lorempixel.com/200/200",
        scores: [8, 2, 1, 6, 3, 9, 4, 6, 7, 5]
    },
    {
        name: "Lelly",
        photo: "http://lorempixel.com/200/200",
        scores: [8, 9, 6, 7, 2, 4, 9, 3, 8, 7]
    }
]

let totalScoreArray = profiles.map(item => {
    let scoreSum = 0;
    item.scores.forEach(num => {
        scoreSum += num
    })
    return scoreSum;
})

console.log(totalScoreArray)

const questions = [
    "Political correctness is a detriment to freedom of speech.",
    "Trigger words are the scapegoat of the mentally feeble.",
    "Extremesim is the root of all the world's problems.",
    "Sustainable practices at an individual level will not save the world.",
    "Lobbying is legalized bribery.",
    "Intolerance of intolerance is a virtue.",
    "Passion without purpose is obsession.",
    "Being offended is a personal choice.",
    "Every vote should count, but not weigh the same.",
    "All is unfair in love and war."
]

const compareScores = (newUser) => {
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
    }

// const writePage = () => {
//     questions.forEach(e => {
//         $(`Q${questions.indexOf(e) + 1}`).text(e);
//     });

//     // Populate select box with options
//     let opt0 = $(`<option value=""></option>`)
//     let opt1 = $(`<option value="1">1 (Disagree)</option>`)
//     let opt2 = $(`<option value="2">2</option>`)
//     let opt3 = $(`<option value="3">3</option>`)
//     let opt4 = $(`<option value="4">4</option>`)
//     let opt5 = $(`<option value="5">5</option>`)
//     let opt6 = $(`<option value="6">6</option>`)
//     let opt7 = $(`<option value="7">7</option>`)
//     let opt8 = $(`<option value="8">8</option>`)
//     let opt9 = $(`<option value="9">9</option>`)
//     let opt10 = $(`<option value="10">10 (Agree)</option>`)
//     $(".response").append(opt0, opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10)
// }

// writePage();

module.exports = {
    profiles,
    questions,
    totalScoreArray,
    compareScores
}

