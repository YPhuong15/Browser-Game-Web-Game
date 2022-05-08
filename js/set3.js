const quizData = [
    {
        q: "Jupiter is a planet has the most gravity",
        options: ['True', 'False'],
        correct: 0,
    },
    {
        q: "Mercury is known as red planet",
        options: ['True', 'False'],
        correct: 1,
    },
    {
        q: "Jupiter is the largest planet in our solar system",
        options: ['True', 'False'],
        correct: 0,
    },
    {
        q: "Venus is the planet closet to the sun",
        options: ['True', 'False'],
        correct: 1,
    },
    {
        q: "Mars is the hottest planet in the solar system",
        options: ['True', 'False'],
        correct: 1,
    },
    {
        q: "Uranus is the coldest planet in the system",
        options: ['True', 'False'],
        correct: 0,
    },
    {
        q: "Neptune takes 165 years to finish one orbit",
        options: ['True', 'False'],
        correct: 0,
    }
]

const questionNum = document.querySelector('.question-number')
const question = document.getElementById('question')

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];

let score = 0;


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