//data 
const Questions = [
  {
    question: 'What is the smallest unit in the computer ?',
    Choices : ['Block', 'Byte', 'Bits'],
    CorrectAnswer: 'C'
    },
    {
    question: 'The most widely used computer device is ?',
    Choices : ['Solid state disks', 'Mouse', 'Hard-Disk'],
    CorrectAnswer: 'C'
    },
    {
    question: 'What is used to view web pages ?',
    Choices : ['Internet', 'Web Browser', 'Page Browser'],
    CorrectAnswer: 'B'
    },
    {
      question: 'Which one is a word processer ?',
      Choices : ['Notepad', 'Ms-Excel', 'Ms-word'],
      CorrectAnswer: 'C'
    },
    {
      question: 'How many bits are in one byte ?',
      Choices : ['1', '8', '4'],
      CorrectAnswer: 'B'
    },
    {
      question: 'IPS stands for ?',
      Choices : ['International Service Provide', 'Internet Service Printer', 'Internet Service Provider'],
      CorrectAnswer: 'C'
    },
    {
      question: 'How many bytes are in 2040 bits ?',
      Choices : ['255', '1024', '100'],
      CorrectAnswer: 'A'
    },
    {
      question: 'Every number system has a base, which is called ?',
      Choices : ['Index', 'Radix', 'Subscript'],
      CorrectAnswer: 'B'
    },
    {
      question: 'A device that converts digital signals to analog signals is ?',
      Choices : ['Packet', 'Modem', 'Block'],
      CorrectAnswer: 'B'
    }

];

//declared variables

let runningQuestion =  Math.floor(Math.random() * Questions.length );
let questionCount = 0;
let scoreValue = 0;





//dom elements selecting
window.addEventListener('load', renderQuestion);
const quizContainer = document.getElementById('startQuiz');
const questionContainer = document.getElementById('quiz');
const question = document.getElementById('question');
const choice1 = document.getElementById('A');
const choice2 = document.getElementById('B');
const choice3 = document.getElementById('C');
const score = document.getElementById('progress');
const start = document.getElementById('startbtn');

//function goes below

start.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    questionContainer.style.display = 'block';
});

function renderQuestion(){
  scoreBoard();
  if(questionCount < Questions.length){
    runningQuestion =  Math.floor(Math.random() * Questions.length );
    question.innerHTML = '<p>'+Questions[runningQuestion].question;
    choice1.innerHTML = Questions[runningQuestion].Choices[0];
    choice2.innerHTML = Questions[runningQuestion].Choices[1];
    choice3.innerHTML = Questions[runningQuestion].Choices[2];
  }
  else{
    scoreDisplay();
  }
 }

function checkAnswer(answser){
  if(answser == Questions[runningQuestion].CorrectAnswer){
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your answer is right!!',
      showConfirmButton: false,
      timer: 2000
    })
    ++runningQuestion;
    ++questionCount;
    scoreValue += 10;
    renderQuestion();
    
  }
  else{
    Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Your answer is wrong!!',
      showConfirmButton: false,
      timer: 2000
    })
    ++runningQuestion;
    ++questionCount;
    renderQuestion();
    console.log('answer wrong');
  }
}


function scoreDisplay(){
  Swal.fire({
    type: 'success',
    title: `Your Score is ${scoreValue}`,
    text:'Better luck next time!!' ,
    footer: '<a href="#" onclick="document.location.reload(true)">Resatart Quiz!!</a>'
  });
}

function scoreBoard(){
  score.innerHTML = '<p> Score:'+scoreValue + '</p>';
}


