const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

const scoreElement = document.getElementById("score");
const questionCount = document.getElementById("question-count");
const finalScore = document.getElementById("final-score");

let currentQuestionIndex = 0;
let score = 0;

const questions = [

    {
        question: "Which language is mainly used for web page styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false }
        ]
    },

    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },

    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Netscape", correct: true },
            { text: "Apple", correct: false }
        ]
    },

    {
        question: "Which CSS property changes text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
            { text: "color", correct: true },
            { text: "background", correct: false }
        ]
    },

    {
        question: "What does UI stand for?",
        answers: [
            { text: "User Interface", correct: true },
            { text: "Universal Input", correct: false },
            { text: "Unique Identifier", correct: false },
            { text: "User Integration", correct: false }
        ]
    }

];

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartGame);

function startGame(){

    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionCount.innerText =
        `Question ${currentQuestionIndex + 1}/${questions.length}`;

    scoreElement.innerText = `Score: ${score}`;

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer.text;

        button.classList.add("answer-btn");

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState(){

    nextBtn.classList.add("hidden");

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){

    const selectedBtn = e.target;

    const correct =
        selectedBtn.dataset.correct === "true";

    if(correct){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {

        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextBtn.classList.remove("hidden");
}

function nextQuestion(){

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){

        showQuestion();

    }else{

        showResult();
    }
}

function showResult(){

    quizContainer.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    finalScore.innerText =
        `You scored ${score} out of ${questions.length}`;
}

function restartGame(){

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}