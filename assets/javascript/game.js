var wins = 0
var losses = 0
var randomTarget;
var currentScore = 0
var skullA;
var skullB;
var skullC;
var skullD;

function generateRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameBegin() {
    console.log("Game begins!");
    $("#wins").text(wins);
    $("#losses").text(losses);
    randomTarget = generateRandomNum(120, 19);
    $("#target-number").text(randomTarget);
    currentScore = 0
    $("#active-score").text(currentScore);
    skullA = generateRandomNum(12, 1);
    skullB = generateRandomNum(12, 1);
    skullC = generateRandomNum(12, 1);
    skullD = generateRandomNum(12, 1);
    console.log(
        "skulls: ",
        "skull-A: ", skullA,
        "skull-B: ", skullB,
        "skull-C", skullC,
        "skull-D", skullD
    )
}
gameBegin()

$(".skull").click(function () {
    console.log(this.id)
    let clickValue;
    switch (this.id) {
        case "skullA":
            clickValue = skullA;
            break;
        case "skullB":
            clickValue = skullB;
            break;
        case "skullC":
            clickValue = skullC;
            break;
        case "skullD":
            clickValue = skullD;
            break;
        default:
            console.log("A skull was not clicked");
    }
  
    currentScore += clickValue;
    $("#active-score").text(currentScore);

    if (currentScore === randomTarget) {
        wins++;
        alert("You Won The Game! The Skulls are Pleased!");
           gameBegin();
    }
    if (currentScore > randomTarget) {
        losses++;
        alert("You Have Failed the Skulls! What a dissappointment!")
           gameBegin();
    }
})