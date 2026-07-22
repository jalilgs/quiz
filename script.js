// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "London", correct: false },
//       { text: "Berlin", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Madrid", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//       { text: "Venus", correct: false },
//       { text: "Mars", correct: true },
//       { text: "Jupiter", correct: false },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     answers: [
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Arctic Ocean", correct: false },
//       { text: "Pacific Ocean", correct: true },
//     ],
//   },
//   {
//     question: "Which of these is NOT a programming language?",
//     answers: [
//       { text: "Java", correct: false },
//       { text: "Python", correct: false },
//       { text: "Banana", correct: true },
//       { text: "JavaScript", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     answers: [
//       { text: "Go", correct: false },
//       { text: "Gd", correct: false },
//       { text: "Au", correct: true },
//       { text: "Ag", correct: false },
//     ],
//   },
// ];


//Quiz state vars

const allQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which element does 'O' represent on the periodic table?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Ozone", correct: false },
      { text: "Opium", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "Which CSS property changes the text color of an element?",
    answers: [
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "text-style", correct: false },
      { text: "background-color", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "In JavaScript, which keyword is used to declare a variable that cannot be reassigned?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: [
      { text: "South Africa", correct: false },
      { text: "Australia", correct: true },
      { text: "Brazil", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What does 'HTTP' stand for?",
    answers: [
      { text: "Hypertext Transfer Protocol", correct: true },
      { text: "High Speed Transfer Protocol", correct: false },
      { text: "Hypertext Thread Protocol", correct: false },
      { text: "Hyperlink Text Technical Protocol", correct: false },
    ],
  },
  {
    question: "How many degrees are in a full circle?",
    answers: [
      { text: "180", correct: false },
      { text: "360", correct: true },
      { text: "90", correct: false },
      { text: "720", correct: false },
    ],
  },
  {
    question: "Which instrument has 88 keys?",
    answers: [
      { text: "Guitar", correct: false },
      { text: "Violin", correct: false },
      { text: "Piano", correct: true },
      { text: "Flute", correct: false },
    ],
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: true },
      { text: "Bear", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in single-line JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "<!--", correct: false },
      { text: "#", correct: false },
    ],
  },
  {
    question: "What is the capital city of Japan?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Osaka", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Hiroshima", correct: false },
    ],
  },
  {
    question: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "What is the primary language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "Which of the following is an HTTP status code for 'Not Found'?",
    answers: [
      { text: "200", correct: false },
      { text: "500", correct: false },
      { text: "404", correct: true },
      { text: "301", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0°C", correct: true },
      { text: "32°C", correct: false },
      { text: "-10°C", correct: false },
      { text: "100°C", correct: false },
    ],
  },
  {
    question: "How many sides does an octagon have?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which company developed the Python programming language?",
    answers: [
      { text: "Guido van Rossum", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "What color do you get when you mix red and yellow?",
    answers: [
      { text: "Green", correct: false },
      { text: "Purple", correct: false },
      { text: "Orange", correct: true },
      { text: "Brown", correct: false },
    ],
  },
  {
    question: "What is the tallest mammal on Earth?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Rhino", correct: false },
      { text: "Hippo", correct: false },
    ],
  },
  {
    question: "In Web Development, what does DOM stand for?",
    answers: [
      { text: "Data Object Model", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Document Online Management", correct: false },
    ],
  },
  {
    question: "Which continent is the South Pole located on?",
    answers: [
      { text: "Antarctica", correct: true },
      { text: "Asia", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "How many bits are in a single byte?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: true },
      { text: "16", correct: false },
      { text: "32", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "Which fruit is known for having its seeds on the outside?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Banana", correct: false },
      { text: "Strawberry", correct: true },
      { text: "Watermelon", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for water?",
    answers: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
  {
    question: "Which function in JavaScript converts a JSON string into an object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Montreal", correct: false },
    ],
  },
  {
    question: "How many teeth does an adult human normally have?",
    answers: [
      { text: "28", correct: false },
      { text: "30", correct: false },
      { text: "32", correct: true },
      { text: "36", correct: false },
    ],
  },
  {
    question: "Which git command is used to save changes locally with a descriptive message?",
    answers: [
      { text: "git push", correct: false },
      { text: "git commit", correct: true },
      { text: "git add", correct: false },
      { text: "git pull", correct: false },
    ],
  },
];

let quizQuestions = [];
quizQuestions = [...allQuestions];
quizQuestions.sort(() => Math.random() - 0.5) 
quizQuestions = quizQuestions.slice(0, 5)

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length

//event listeners
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  
  startScreen.classList.remove("active")
  quizScreen.classList.add("active")

  showQuestion()
   
}

function showQuestion(){
  //reset state
  answersDisabled = false

  let quizQuestions = [];
  quizQuestions = [...allQuestions];
  quizQuestions.sort(() => Math.random() - 0.5) 
  quizQuestions = quizQuestions.slice(0, 5)

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Shuffle answers
  currentQuestion.answers.sort(() => Math.random() - 0.5);

  currentQuestionSpan.textContent = currentQuestionIndex + 1

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%"

  questionText.textContent = currentQuestion.question

  //todo: explain this in a second
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button")
    button.textContent = answer.text
    button.classList.add("answer-btn")

    //dataset to store custom data
    button.dataset.correct = answer.correct

    button.addEventListener("click", selectAnswer)

    answersContainer.appendChild(button)


  })

}

function selectAnswer(event){
  if(answersDisabled) return 
  answersDisabled = true

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true"

  // todo:
  Array.from(answersContainer.children).forEach((button) =>{
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }else if(button === selectedButton){
      button.classList.add("incorrect");
    }
  });
   
  if(isCorrect){
    score++;
    scoreSpan.textContent = score
  }

  setTimeout(() => {
    currentQuestionIndex ++;
    if(currentQuestionIndex < quizQuestions.length){
      showQuestion()
    }else{
      showResults()
    }
  },1000)
}

function showResults(){
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active")

  finalScoreSpan.textContent = score;

  const percentage = (score/quizQuestions.length) * 100

  if(percentage === 100){
    resultMessage.textContent = "Perfect! you're a genius!"
  }else if (percentage >= 80){
    resultMessage.textContent = "Great job! You know your stuff!"
  }else if (percentage >= 60){
    resultMessage.textContent = "good effort!"
  }else if (percentage >= 40){
    resultMessage.textContent = "Not bad!"
  }else{
    resultMessage.textContent = "Keep studying! you'll get better!"
  }
}




function restartQuiz(){
  resultScreen.classList.remove("active");

  startQuiz()
}









// // QUIZ STATE VARS
// let currentQuestionIndex = 0;
// let score = 0;
// let answersDisabled = false;

// totalQuestionsSpan.textContent = quizQuestions.length;
// maxScoreSpan.textContent = quizQuetions.length;

// startButton.addEventListener("click", startQuiz);
// startButton.addEventListener("click", restartQuiz);

// function startQuiz() {
//   currentQuestionIndex = 0;
  
//   scoreSpan.textContent = score;

//   startScreen.classList.remove("active");
//   quizScreen.classList.add("active");

//   showQuestion();
// }

// function showQuestion() {
//   answersDisabled = false;
//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   currentQuestionSpan.textContent = currentQuestionIndex + 1;

//   const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
//   progressBar.style.width = progressPercent + "%";
//   questionText.textContent = currentQuestion.question;

//   // Clear previous answers
//   answersContainer.innerHTML = "";
//   currentQuestion.answers.forEach((answer => {
//     const button = document.createElement("button");
//     button.textContent = answer.text;
//     button.classList.add("answer-btn");

//     button.dataset.correct = answer.correct;
//     button.addEventListener("click", selectAnswer);

//     answersContainer.appendChild(button);
//   });

// function selectAnswer(event) {
//   if (answersDisabled) return;

//   answersDisabled = true;

//   const selectedButton = event.target;
//   const isCorrect = selectedButton.dataset.correct === "true";

//   array.from(answersContainer.children).forEach(button => {
//     button.classList.add(button.dataset.correct === "true") {
//       button.classList.add("correct");
//     } else {
//       button.classList.add("incorrect");  
//     }
//   });

//   if (isCorrect) {
//     score++;
//     scoreSpan.textContent = score;
//   }

//   setTimeout(() => {
//     currentQuestionIndex++;   
// }

// function restartQuiz() {
//   console.log("Quiz restarted");
// }


