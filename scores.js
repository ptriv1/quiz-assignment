scoreForm = document.createElement('form');
var scoreHeader = document.createElement("h3");
scoreHeader.textContent = "Highest Scores";
document.getElementById('initials-label').innerHTML = localStorage.getItem('initials');
document.getElementById('score-label').innerHTML = localStorage.getItem('score');