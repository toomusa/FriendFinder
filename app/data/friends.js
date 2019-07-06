
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
    item.scores.forEach(num => {scoreSum += item.scores[num]})
    console.log(scoreSum)
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

module.exports = {
    profiles,
    questions,
    totalScoreArray
}