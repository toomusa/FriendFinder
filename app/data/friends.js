
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

const writePage = () => {
    questions.forEach(e => {
        $(`#Q${questions.indexOf(e) + 1}`).text(e);
    });

    // Populate select box with options
    let opt0 = $(`<option value=""></option>`)
    let opt1 = $(`<option value="1">1 (Disagree)</option>`)
    let opt2 = $(`<option value="2">2</option>`)
    let opt3 = $(`<option value="3">3</option>`)
    let opt4 = $(`<option value="4">4</option>`)
    let opt5 = $(`<option value="5">5</option>`)
    let opt6 = $(`<option value="6">6</option>`)
    let opt7 = $(`<option value="7">7</option>`)
    let opt8 = $(`<option value="8">8</option>`)
    let opt9 = $(`<option value="9">9</option>`)
    let opt10 = $(`<option value="10">10 (Agree)</option>`)
    $(".response").append(opt0, opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10)
}

writePage();


$("#questionaire").on("submit", function(e) {
    e.preventDefault();
    
    let newUser = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [$("#A1").val(), $("#A2").val(), $("#A3").val(), $("#A4").val(), $("#A5").val(), 
            $("#A6").val(), $("#A7").val(), $("#A8").val(), $("#A9").val(), $("#A10").val()]
        }

    if ($("#name").val() && $("#A1").val() && $("#A2").val() && $("#A3").val() && $("#A4").val() && $("#A5").val() && 
    $("#A6").val() && $("#A7").val() && $("#A8").val() && $("#A9").val() && $("#A10").val()) {

        $.post("/api/user", newUser, function(bestMatch) {
            $("#user-name").text(newUser.name);
            $("#user-img").attr("src", newUser.photo);
            $("#match-name").text(bestMatch.name);
            $("#match-img").attr("src", bestMatch.photo);
            $("#results-modal").modal("toggle");
        });
    } else {
        alert("Please enter your name and answer all questions before hitting Submit.")
    }

})
