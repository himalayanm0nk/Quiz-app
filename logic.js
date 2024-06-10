const questions =[

    {
        question: "Which is the largest animal in the world",
        answers :[
            {text : "shark", correct :false},
            {text : "Blue Whale" , correct :true},
            {text :"Elepahnt",correct :false},
            {text : "Giraffe", correct :false}
        ]
    },{
        question: "Which is the largest Country in the world",
        answers :[
            {text : "India", correct :false},
            {text : "Russia" , correct : true},
            {text :"Japan",correct : false},
            {text : "USA", correct :false}
        ]
    },{
        question: "Which is the safest Country in the world",
        answers :[
            {text : "India", correct :false},
            {text : "Japan" , correct : true},
            {text :"Pakistan",correct : false},
            {text : "Iraz", correct :false}
        ]
    },{
        question: "Which is the best Anime in the world",
        answers :[
            {text : "Doraemon", correct :false},
            {text : "Naruto" , correct : true},
            {text :"Motu-Patlu",correct : false},
            {text : "Roll-no=21", correct :false}
        ]
    }
];

const questionElement = document.getElementById('question')
const answerButton =document.getElementById('answer-buttons')
const nextbtn =document.getElementById('next-btn')

let currentQuestionIndex =0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
     let quesno = currentQuestionIndex +1
     questionElement.innerHTML = quesno + ". " + currentQuestion.question

        currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn')   // har button ko btn class miliege
    answerButton.appendChild(button)
            if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer);
     })
       

}

function resetState(){
    nextbtn.style.display="none"
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}


function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled= true;
    });
    nextbtn.style.display="block"
}



function showScore(){
    resetState();
    questionElement.innerHTML =`You Scored ${score} out of ${questions.length}`
    nextbtn.innerHTML="play Again"
    nextbtn.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();