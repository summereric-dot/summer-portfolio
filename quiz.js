console.log("Quiz JavaScript is connected.");

//create a quiz
const quizContainer=document.getElementById('quiz');
const resultsContainer=document.getElementById('results');
const submitButton=document.getElementById('submit');
const quizQuestions=[
    {
        question:"Johanna Smith is currently completing a PhD in:",
        answers:{
            a:"Computer coding",
            b:"Human-computer interaction",
            c:"Interactive programming languages",
            d:"Low and high-fidelity prototyping"
        },
        correctAnswer:"a"
    },
    {
        question:"Johanna Smith works at:",
        answers:{
            a:"Queensland Health",
            b:"Queensland University of Technology",
            c:"University of Technolgy in Sydney",
            d:"All of the above",
        },
        correctAnswer:"b"
    },
    {
        question:"Johannah’s research skills include:",
        answers:{
            a:"Leadership",
            b:"Planning and scheduling",
            c:"Teamwork",
            d:"Programming languages"
        },
        correctAnswer:"c"
    },

    {
        question:"Johannah is super passionate about:",
        answers:{
            a:"People",
            b:"Innovation",
            c:"human-centred design",
            d:" All of the above and more!"
        },
        correctAnswer:"d"
    }
];
function buildQuiz(){
    const output=[];

    for(i=0; i<quizQuestions.length;i++){
        const answers=[];

        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                +letter+':'
                +quizQuestions[i].answers[letter]
                +'</label>'
            );
        }
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

        quizContainer.innerHTML=output.join('');
}

//gather answer containers from our quiz
function showResults(){
    var answerContainers=quizContainer.querySelectorAll('.answers');
    //keep track of user's answers
    var numCorrect=0;
    //for each question...
    for(i=0;i<quizQuestions.length;i++){
    //find selected answer
      userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;//if answer is correct
      if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
        //color the answer green
        answerContainers[i].style.color='lightgreen';
      }else{
        //color the answer red
        answerContainers[i].style.color='red';
      }
    }


if(numCorrect===0){
    resultsContainer.innerHTML="That wasn't your best effort-you didn't get a single answer correct.";
}
if(numCorrect===1){
    resultsContainer.innerHTML="There's room for improvement there! You only got one correct answer."; 
}
if(numCorrect===2){
    resultsContainer.innerHTML="That was okey! You got a score of 2 out of 4.Have another go to improve.";
}
if(numCorrect===3){
    resultsContainer.innerHTML="Congratulations!You got a good score of 3 out of 4.";
}
if(numCorrect===4){
    resultsContainer.innerHTML="Congratulations!You got a perfect score of 4 out of 4.';"
 }
}

buildQuiz();

submitButton.onclick=function(){
    showResults();
};

document.addEventListener("DOMContentLoaded", () => {
let currentQuestion=0;
let score=0;
let feedbackMessage="";
const questions=[
    "What dose HDR stand for?",
    "Which is more accessible: colour-only feedback or text+colour?",
    "True or false:Arrays can store multiple values."
];

const correctAnswers=[
    "Higher Degree Research",
    "text+colour",
    "True"
];

const feedbackMessages=[
    "✅ Well done - that's correct.",
    "❌ Not quite - try again.",
    "Please select an answer to continue."
];

const questionText=document.querySelector("#questionText");
const answerInput=document.querySelector("#answerInput");
const checkButton=document.querySelector("#checkButton");
const feedbackElement=document.querySelector("#feedback");

function checkAnswer(userInput,correctAnswer){
    return userInput.trim().toLowerCase()===correctAnswer.trim().toLowerCase();
}

function updateFeedback(message){
    feedbackElement.textContent=message;
};

function showQuestion(){
    questionText.textContent=questions[currentQuestion];
    answerInput.value="";
    updateFeedback("");
}

function handleSubmit(){
    const userInput=answerInput.value;

    if(userInput.trim()===""){
        updateFeedback(feedbackMessage[2]);
        return;
    }
    if(checkAnswer(userInput,correctAnswers[currentQuestion])){
        score++;
        feedbackMessage=feedbackMessages[0];
    } else{
        feedbackMessage=feedbackMessage[1];
    }

    updateFeedback(feedbackMessage+"Current score:"+score);

    currentQuestion++;

    if(currentQuestion<questions.length){
        setTimeout(showQuestion,1000);
    } else{
        updateFeedback("Quiz finished. Final score:"+score+"out of "+questions.length+".");
    }
}

function resetQuiz(){
    currentQuestion=0;
    score=0;
    showQuestion();
}

showQuestion();
checkButton.addEventListener("click",handleSubmit);

});

