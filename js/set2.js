//Array of objects

const quizData = [
    {
        q: "Which country produces the most coffee in the world?",
        options: ['Russia', 'England', 'Brazil', 'Germany'],
        correct: 2,
    },
    {
        q: "What language has the most words?",
        options: ['Spanish', 'English', 'Chinese', 'Vietnamese'],
        correct: 1,
    },
    {
        q: "Which is the highest waterfall in the world?",
        options: ['Victoria Falls, Africa', 'Angel Falls, Venezuela', 'Kaieteur Falls, Guyana', 'Yosemite Falls, US'],
        correct: 1,
    },
    {
        q: "Who was the first American to go into space? ",
        options: ['Valentina Tereshkova', 'John Young', 'Neil Armstrong', 'Alan Shephard'],
        correct: 3,
    },
    {
        q: "What is the name of the thin but long country that spans more than half of the western coast of South America?",
        options: ['Brazil', 'Puerto Rico', 'Chile', 'Cuba'],
        correct: 2,
    },
    {
        q: "What is the capital city of Spain?",
        options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
        correct: 0,
    },
    {
        q: "Ludwig Van Beethoven was born in 1770 in which city?",
        options: ['Vienna', 'Berlin', 'Bonn', 'Munich'],
        correct: 2,
    }
]

const questionNum = document.querySelector('.question-number')
const question = document.getElementById('question')

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
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
        element.addEventListener('click', function(){
            if (currentQuestion.correct === index) {
                
              console.log('Correct Answer!');
              score++;
              console.log(score);
            } else {
              console.log('Wrong Answer!');
            }
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




