const questions = [
  {
      question: 'What is the capital of France?',
      answers: [
          { text: 'Berlin', correct: false },
          { text: 'Madrid', correct: false },
          { text: 'Paris', correct: true },
          { text: 'Rome', correct: false }
      ]
  },
  {
      question: 'Who wrote "To Kill a Mockingbird"?',
      answers: [
          { text: 'Harper Lee', correct: true },
          { text: 'Mark Twain', correct: false },
          { text: 'Ernest Hemingway', correct: false },
          { text: 'F. Scott Fitzgerald', correct: false }
      ]
  },
  {
      question: 'What is the largest planet in our solar system?',
      answers: [
          { text: 'Earth', correct: false },
          { text: 'Jupiter', correct: true },
          { text: 'Mars', correct: false },
          { text: 'Venus', correct: false }
      ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
      score++;
  }
  nextButton.classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
      nextButton.classList.add('hidden');
  } else {
      showResult();
  }
}

function showResult() {
  questionContainer.innerText = '';
  answerButtons.innerHTML = '';
  resultText.innerText = `You scored ${score} out of ${questions.length}`;
  resultContainer.classList.remove('hidden');
  nextButton.classList.add('hidden');
}

function restartQuiz() {
  startQuiz();
}

// Initialize the quiz
startQuiz();
