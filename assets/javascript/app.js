$(document).ready(function(){
// array of objects of questions
var questions = [
    question1 = {
        question: "In Batman: The Animated Series, who was Batman's first villain?",
        choices: ["Joker", "Catwoman", "Man-Bat", "Poison Ivy"],
        correctAnswer: 2,
        image: "assets/images/manbat.jpg"
    },
    question2 = {
        question: "What was Pinky and the Brain trying to accomplish in each episode?",
        choices: ["Escape the laboratory", "Take over the world", "Get famous", "Find female mice"],
        correctAnswer: 1,
        image: "assets/images/pinkybrain.jpg" 
    },
    question3 = {
        question: "Who was Doug's crush throughout the series?",
        choices: ["Mrs. Wingo", "Connie Benge", "Beebe Bluff", "Patty Mayonnaise"],
        correctAnswer: 3,
        image: "assets/images/doug.jpg"
    },
    question4 = {
        question: "Which of the these was not one of Tommy's friends in Rugrats?",
        choices: ["Phoebe", "Chuckie", "Phil", "Lil"],
        correctAnswer: 0,
        image: "assets/images/rugrats.gif"
    },
    question5 = {
        question: "Before Scrooge McDuck came to America and made a fortune, what did he want to do for a living in Scotland?",
        choices: ["Shine shoes", "Play the bagpipes", "Become a farmer", "Work on a steam boat"],
        correctAnswer: 1,
        image: "assets/images/ducktales.jpg"
    },
    question6 = {
        question: "Which of the following was not one of the Planeteers' powers?",
        choices: ["Heart", "Earth", "Water", "Spirit"],
        correctAnswer: 3,
        image: "assets/images/captainplanet.jpg"
    },
    question7 = {
        question: "What was the name of the pet lizard of Ms. Frizzle's class in The Magic School Bus?",
        choices: ["Arnold", "Dorothy Ann", "Liz", "Carlos"],
        correctAnswer: 2,
        image: "assets/images/magicschoolbus.jpg"
    },
    question8 = {
        question: "What was Dexter's password to get into his secret laboratory in the show Dexter's Laboratory?",
        choices: ["Star Wars", "Star Trek", "Einstein", "Stephen Hawking"],
        correctAnswer: 0,
        image: "assets/images/dexterslab.jpg"
    },
    question9 = {
        question: "In the Powerpuff Girls, the girls are made out of sugar, spice and everything nice, but what are the Rowdyruff Boys made out of?",
        choices: ["Dirt, scabs, and cold slimy snails", "Snips, snails, and puppy dog tails", "Herbs, grass, and shiny green leaves", "Cotton, gravel, and chemical X"],
        correctAnswer: 1,
        image: "assets/images/rowdyruff.png"
    },
    question10 = {
        question: "In Hey Arnold!, who was the person that Helga always punches when she's privately confessing her love for Arnold?",
        choices: ["Harold", "Stinky", "Sid", "Brainy"],
        correctAnswer: 3,
        image: "assets/images/heyarnold.jpg"
    },
    question11 = {
        question: "In Aaah!! Real Monsters, What did they use as currency?",
        choices: ["Victims' tears", "Stolen socks", "Toenail clippings", "Hair snips"],
        correctAnswer: 2,
        image: "assets/images/realmonsters.jpg"
    },
    question12 = {
        question: "In Ren and Stimpy, who is the super hero that flies backwards and once fought Spider-man?",
        choices: ["Powdered Toast Man", "Dr. Dough-naught", "Waffle Woman", "Muddy Mudskipper"],
        correctAnswer: 0,
        image: "assets/images/renstimpy.jpg"
    }
];

//variables 
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var startAt = 10;
var number = startAt;
var userAnswer;
var currentQuestion = 0;
var inbetween = 3;
var number2 = inbetween;

//timer functions
function time(){
    $("#timer").html("<h2>" + number +"</h2>");
}

function run(){
    counter = setInterval(countDown, 1000);
}

function countDown(){
    number--;
    time();
    if (number === 0) {
        stop();
    }
}


function stop(){
    clearInterval(counter);
    clearTimeout(counter);
    number = startAt;
    // wrongPage(); //because if it counts down to 0 and no input then incorrect
    unanswered();
}

// function resetTimer() {
//     number = startAt;
//     time();
//     run();
// }

$("#reset").hide();

//start function with button
$("#start").on("click", function(){
    startGame();
});
function startGame(){
    $("#start").hide();
    // $("#reset").hide();
    $(".greeting").hide();
    time();
    run();
    game();
}

//game set up in the beginning
function game(){
    $("#ask").append("<h2>" + questions[currentQuestion].question +"</h2>");
    $("#answerChoice0").append("<p class='hover'>" + questions[currentQuestion].choices[0] + "</p>");
    $("#answerChoice1").append("<p class='hover'>" + questions[currentQuestion].choices[1] + "</p>");
    $("#answerChoice2").append("<p class='hover'>" + questions[currentQuestion].choices[2] + "</p>");
    $("#answerChoice3").append("<p class='hover'>" + questions[currentQuestion].choices[3] + "</p>");
    // answerSelection();
}

//set up the next question in the questions array
function nextQuestion(){
    $("#outcome").empty();
    $("#image-answer").empty();
    $("#right-answer").empty();
    currentQuestion++;
    if (currentQuestion == questions.length) {
        result();
    } else {
    // resetTimer();
    time();
    run();
    $("#ask").append("<h2>" + questions[currentQuestion].question +"</h2>");
    $("#answerChoice0").append("<p class='hover'>" + questions[currentQuestion].choices[0] + "</p>");
    $("#answerChoice1").append("<p class='hover'>" + questions[currentQuestion].choices[1] + "</p>");
    $("#answerChoice2").append("<p class='hover'>" + questions[currentQuestion].choices[2] + "</p>");
    $("#answerChoice3").append("<p class='hover'>" + questions[currentQuestion].choices[3] + "</p>");
}
}
//click events to select from answer choices
// $(".answerList").on("click", function(){
    $("#answerChoice0").on("click", function(){
        userAnswer = 0;
        answerCompare();
    })
    $("#answerChoice1").on("click", function(){
        userAnswer = 1;
        answerCompare();
    })
    $("#answerChoice2").on("click", function(){
        userAnswer = 2;
        answerCompare();
    })
    $("#answerChoice3").on("click", function(){
        userAnswer = 3;
        answerCompare();
    });
// });

//comparing user answer with correct answer
function answerCompare(){
    clearInterval(counter);
    if (userAnswer == questions[currentQuestion].correctAnswer) {
        correctPage();
    } else {
        wrongPage();
    }
}

//correct answer
function correctPage(){
    $("#ask").empty();
    $(".answerList").empty();
    // $("#answer0").empty();
    // $("#answer1").empty();
    // $("#answer2").empty();
    // $("#answer3").empty();
    $("#outcome").append("<h2>That's Correct!</h2>");
    $("#image-answer").append("<img src='" + questions[currentQuestion].image + "'/>");
    correct++;
    console.log(correct);
    number = startAt;
    run2();
}

//wrong answer
function wrongPage(){
    $("#ask").empty();
    $(".answerList").empty();
    // $("#answer0").empty();
    // $("#answer1").empty();
    // $("#answer2").empty();
    // $("#answer3").empty();
    $("#outcome").append("<h2>That's Wrong!</h2>");
    $("#right-answer").append("<p>The correct answer is: " + questions[currentQuestion].choices[questions[currentQuestion].correctAnswer] + "</p>");
    $("#image-answer").append("<img src='" + questions[currentQuestion].image + "'/>");
    incorrect++;
    console.log(incorrect);
    number = startAt;
    run2();
}

function unanswered(){
    $("#ask").empty();
    $(".answerList").empty();
    // $("#answer0").empty();
    // $("#answer1").empty();
    // $("#answer2").empty();
    // $("#answer3").empty();
    $("#outcome").append("<h2>Time's Up!</h2>");
    $("#right-answer").append("<p>The correct answer is: " + questions[currentQuestion].choices[questions[currentQuestion].correctAnswer] + "</p>");
    $("#image-answer").append("<img src='" + questions[currentQuestion].image + "'/>");
    noAnswer++;
    console.log(noAnswer);
    number = startAt;
    run2();
}

//timer for when on wrong or correct page
function between() {
    $("#timer").html("<h2>" + number2 +"</h2>");
}

function run2() {
    counter2 = setInterval(countDown2, 1000);
}

function countDown2(){
    number2--;
    between();
    if (number2 === 0) {
        stop2();
    }
}

function stop2(){
    clearInterval(counter2);
    clearTimeout(counter2);
    number2 = inbetween;
    // resetTimer();
    nextQuestion();
}

// function resetTimer2() {
//     number2 = inbetween;
//     between();
// }

function result() {
    clearTimeout(counter);
    clearTimeout(counter2);
    $("#image-answer").empty();
    $("#right-answer").empty();
    $("#reset").show();
    $("#resultPage1").show();
    $("#resultPage2").show();
    $("#resultPage3").show();
    $("#resultPage1").append("<h3>Correct Answers: " + correct + "</h3>");
    $("#resultPage2").append("<h3>Incorrect Answers: " + incorrect +"</h3>");
    $("#resultPage3").append("<h3>Unanswered: " + noAnswer + "</h3>");
}

//reset button
$("#reset").on("click", function(){
    correct = 0;
    incorrect = 0;
    currentQuestion = 0;
    noAnswer = 0;
    $("#resultPage1").hide();
    $("#resultPage2").hide();
    $("#resultPage3").hide();
    startGame();
})

});