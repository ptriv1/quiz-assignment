/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */


var quizStart = document.querySelector("#start-quiz-button");
var v = document.getElementById("showHide")

var targetDiv = document.getElementById("showHide");
var btn = document.getElementById("btn");

var score;
var timer;
var timerCount;



btn.onclick = function () {
    if (v.style.display === "none") {
        v.style.display = "block";
    } else {
        v.style.display = "none";
    }
}

var questions = [
    {
        question: "What is used to add color and styling to HTML elements?",
        choices: ["HTML", "CSS", "Java", "JavaScript"],
        answer: "CSS"
    },
    {
        question: "Which language is used to add functions to HTML elements?",
        choices: ["Java", "JavaScript", "C++", ".NET"],
        answer: "JavaScript"
    },
    {
        question: "What is used to traverse HTML elements?",
        choices: ["The browser", "DOM", "JavaScript", "C++"],
        answer: "DOM"
    },
    {
        question: "Which website should developers use to find documentation on web development?",
        choices: ["Google", "Indeed.com", "Mozilla", "Coursera"],
        answer: "Mozilla"
    },
    {
        question: "Which library was influential and has resulted in changes in JavaScript?",
        choices: ["jQuery", "Java", "C++", "Visual Studio Code"],
        answer: "jQuery"
    },
    {
        question: "Which process can assist developers in designing website formats?",
        choices: ["Writing pseudocode", "Programming", "Wireframing", "Viewing websites"],
        answer: "Wireframing"
    },
]


function checkAnswers(event) {
    var id = event.target.id;
    console.log(id);

    var currentQuestion = questions[iterator];
    console.log(currentQuestion);

    var currentQuestionChoices = currentQuestion.choices;
    console.log(currentQuestionChoices);

    var clickedAnswer = currentQuestionChoices[id];
    console.log(clickedAnswer);
    if (currentQuestion.choices[id] === clickedAnswer) {
        score++;
        console.log("Correct!");
        iterateQuestions();
    }
    else {
        console.log("Incorrect!");
        iterateQuestions();
    }
}

var iterator = 0;



function createAnswerButtons() {
    document.getElementById('quiz-question-choices').innerHTML = "";
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[0];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', 'button-0');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[1];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', 'button-1');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[2];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', 'button-2');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[3];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', 'button-3');
    button.addEventListener("click", checkAnswers);
}

/* function removeChoices(event) {
    document.getElementById('#quiz-question-choices').innerHTML = "";
} */

function iterateQuestions() {
    btn.addEventListener("click", iterateQuestions);
    document.getElementById("quiz-question").innerHTML = questions[iterator].question;
    createAnswerButtons();
    // checkAnswers()
    iterator++;
}



function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.innerHTML = timerCount;
        if (timerCount >= 0) {
            clearInterval(timer);
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000)
    iterateQuestions();
}

function alertUser() {
    alert('Go to the next question');
}

btn.addEventListener("click", startTimer);


