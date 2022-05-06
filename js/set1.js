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


const questionNum = document.querySelector('.question-number')
const question = document.getElementById('question')

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
//let availableOptions = [];
let score = 0;

const opt1 = document.querySelector(".op1")
const opt2 = document.querySelector(".op2")
const opt3 = document.querySelector(".op3")
const opt4 = document.querySelector(".op4")


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
    availableQuestion.splice(questionIndex, 1);

    let choice = document.querySelectorAll('.choice-text');

    choice.forEach(function (element, index) {
        element.textContent = currentQuestion.options[index];
        element.addEventListener('click', function () {
            if (currentQuestion.correct === index) {
                console.log('Correct Answer!');
                score++;
                console.log(score);
                element.parentElement.classList.add("correct");
            } else {
                console.log('Wrong Answer!');
                element.parentElement.classList.add("wrong");
            }
            setTimeout(() => {
                element.parentElement.classList.remove();
                nextQ();
            },1000);
        });
        
    });
    questionCounter++;

}

function nextQ() {
    if (questionCounter === availableQuestion.length) {
        console.log('Quiz over')
        //return window.location.assign('/end.html');
    }
    else {
        getNewQuestion();
    }
    
}

setAvailableQuestions()
getNewQuestion()




