//Array of objects

const quizData = [
    {
        q: "The Statue of Liberty was given to the US by which country?",
        options: ['Russia', 'England', 'France', 'Germany'],
        correct: 2,
    },
    {
        q: "Which US city is known as the City of Brotherly Love?",
        options: ['Texas', 'Philadelphia', 'North Carolina', 'Nebraska'],
        correct: 1,
    },
    {
        q: "Kodiak island is in which US state?",
        options: ['New York', 'Alaska', 'Washington', 'Michigan'],
        correct: 1,
    },
    {
        q: "What was the first state? ",
        options: ['Pennsylvania', 'Georgia', 'New Jersey', 'Delaware'],
        correct: 3,
    },
    {
        q: "In what state did the first official American baseball game take place?",
        options: ['California', 'Neveda', 'New Jersey', 'Arizona'],
        correct: 2,
    }

]

const questionNum = document.querySelector('.question-number');
const question = document.getElementById('question');
const runningProgress = document.getElementById('progress-inner');
const gameScore = document.getElementById('score');

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let correctCounter = 0;

let score = 0;
const bonus = 10;

const maxQ = 5;

function setAvailableQuestions() {
    const totalQuestion = quizData.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quizData[i]);
    }
}

function getNewQuestion() {

    //set and print question number
    questionNum.innerHTML = "Question " + (questionCounter + 1) + " out of " + quizData.length;

    //set the question content and set it randomly appear
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerHTML = currentQuestion.q;

    let choice = document.querySelectorAll('.choice-text');
    choice.forEach(function (element, index) {
        element.textContent = currentQuestion.options[index];
    });
    availableQuestion.splice(questionIndex, 1);
    //questionCounter++;
    let accurateClass;

    choice.forEach(function (element, index) {

        element.addEventListener('click', function () {
            if (index === currentQuestion.correct) {
                correctCounter++;
                accurateClass = "correct"
                element.parentElement.classList.add(accurateClass);
                console.log(correctCounter)
                updateScore(bonus, correctCounter)
                console.log("Correct!")
            } else {
                accurateClass = "wrong"
                element.parentElement.classList.add(accurateClass)
            }

            //console.log(questionCounter);
            setTimeout(() => {
                element.parentElement.classList.remove(accurateClass);
                nextQ();
            }, 2000);
        });
    });

    questionCounter++;
    console.log(questionCounter);
}


updateScore = (bonus, correctCounter) => {
    score = bonus * correctCounter;
    gameScore.innerHTML = score;
};

function nextQ() {
    if (availableQuestion.length === 0) {
        console.log('Quiz over')
        //return window.location.assign('/end.html');
    }
    else {
        getNewQuestion();
    }
}


setAvailableQuestions()
getNewQuestion()

