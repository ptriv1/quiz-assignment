// Create variables
var quizStart = document.querySelector("#start-quiz-button");
var v = document.getElementById("showHide")

var targetDiv = document.getElementById("showHide");
var btn = document.getElementById("btn");

var score;
var timer;
var timerCount = 120;
var timerElement = document.getElementById("timer-element");
var initials;



// Display quiz
btn.onclick = function () {
    if (v.style.display === "none") {
        v.style.display = "block";
    } else {
        v.style.display = "none";
    }
}

// Array for questions
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

// Create variables
var id;
var currentQuestion;
var currentQuestionChoices;
var clickedAnswer;


// Function to check answers
function checkAnswers(event) {
    id = event.target.id;
    currentQuestion = questions[iterator];
    currentQuestionChoices = currentQuestion.choices;
    clickedAnswer = currentQuestionChoices[id];
    if (currentQuestion.choices[id] === currentQuestion.answer) {
        score++;
    }
    else if (currentQuestion.choices[id] !== currentQuestion.answer) {
        timerCount = timerCount - 5;
    }
    iterator++;
    if (iterator >= questions.length) {
        document.querySelector('.quiz').innerHTML = "";
        doForm();
        clearInterval(timer);
    } else {
        iterateQuestions();
    }
    
}

var iterator = 0;


// Creating answer buttons
function createAnswerButtons() {
    document.getElementById('quiz-question-choices').innerHTML = "";
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[0];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', '0');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[1];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', '1');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[2];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', '2');
    button.addEventListener("click", checkAnswers);
    var button = document.createElement('button');
    button.innerHTML = questions[iterator].choices[3];
    document.getElementById("quiz-question-choices").appendChild(button);
    button.className = 'choices';
    button.setAttribute('id', '3');
    button.addEventListener("click", checkAnswers);
}


// Iterating through questions
function iterateQuestions() {
    btn.addEventListener("click", iterateQuestions);
    document.getElementById("quiz-question").innerHTML = questions[iterator].question;
    createAnswerButtons();
}


// Starting timer
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.innerHTML = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000)
    iterateQuestions();
    if (timerCount === 0) {
        clearInterval(timer);
    }
}

var userInitials;
var userScore;
var initialsLabel;
var scoreLabel;
var formInitials;
var scoreSentence;
var scoreForm;

// Submitting initials form
function doForm() {
    formInitials = document.createElement("section");
    formInitials.setAttribute('id', 'form-initials');
    initialsLabel = document.createElement('label');
    initialsLabel.setAttribute('id', 'initials-label');
    initialsLabel.textContent = "Initials";
    userInitials = document.createElement("input");
    userInitials.setAttribute('id', 'user-initials');
    scoreLabel = document.createElement('label');
    scoreLabel.setAttribute('id', 'score-label');
    scoreLabel.textContent = "Score";
    userScore = document.createElement("input");
    userScore.setAttribute('id', 'user-score');
    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.className = 'initials';
    button.setAttribute('id', 'submit-button-form');
    formInitials.append(initialsLabel);
    formInitials.append(userInitials);
    formInitials.append(scoreLabel);
    formInitials.append(userScore);
    formInitials.append(button)
    document.querySelector('.quiz').append(formInitials);
    button.addEventListener("click", enterInitials);
    
}

// Allows user to enter initials
function enterInitials(event) {
    event.preventDefault();
    localStorage.setItem("initials", userInitials.value);
    localStorage.setItem("score", userScore.value);
}



btn.addEventListener("click", startTimer);


