//alert("hello");
function ageInDays() {
    var age = prompt("enter tour age");
    var ageInDayss = (2020 - age) * 365
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + 'days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

};
function reset() {
    document.getElementById("ageInDays").remove();
};
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://source.unsplash.com/200x200/?cat";
    div.appendChild(image);
};
function rpsgame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
};
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'rock': 0.5, 'scissors': 1, 'paper': 0 },
        'scissors': { 'scissors': 0.5, 'paper': 1, 'rock': 0 },
        'paper': { 'paper': 0.5, 'rock': 1, 'scissors': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}
function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return { 'message': "you lost", 'color': 'red' };
    }
    else if (yourScore == 1) {
        return { 'message': 'yor win', 'color': 'green' };
    }
    else {
        return { 'message': 'you tired', 'color': 'yellow' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissors': document.getElementById("scissors").src
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>'"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>'"
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";padding: 30px;font-size:60px;'>"+finalMessage['message']+"</h1>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}