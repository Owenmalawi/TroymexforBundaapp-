// Mock question data
const questions = [
  {
    topic: "Genetics",
    question: "Which of the following is an example of a Mendelian trait in plants?",
    options: ["Seed color", "Leaf size", "Flowering time", "Plant height"],
    correct: 0,
  },
  {
    topic: "Agrobiodiversity",
    question: "What is agrobiodiversity primarily concerned with?",
    options: [
      "Diversity of crops and livestock",
      "Diversity in natural forests",
      "Soil microbial diversity",
      "Water cycle diversity",
    ],
    correct: 0,
  },
  {
    topic: "Silviculture",
    question: "Which silvicultural system involves the removal of all trees in an area?",
    options: [
      "Shelterwood system",
      "Clearcutting system",
      "Selective cutting system",
      "Seed tree system",
    ],
    correct: 1,
  },
  {
    topic: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geological Information System",
      "Geographic Information System",
      "Global Imaging System",
      "Geospatial Information Software",
    ],
    correct: 1,
  },
  {
    topic: "Remote Sensing",
    question: "Which of the following is a key application of remote sensing?",
    options: [
      "Weather monitoring",
      "Tree planting",
      "Soil testing",
      "Watering crops",
    ],
    correct: 0,
  },
];

// State variables
let currentQuestion = 0;
let username = "";

// DOM elements
const loginScreen = document.getElementById("loginScreen");
const gameScreen = document.getElementById("gameScreen");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");
const welcomeMessage = document.getElementById("welcomeMessage");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

// Login handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredUsername = parseInt(usernameInput.value.trim(), 10);
  const enteredPassword = passwordInput.value.trim();

  if (
    ((enteredUsername >= 210100700 && enteredUsername <= 210100800) ||
      (enteredUsername >= 220100700 && enteredUsername <= 220100800)) &&
    enteredUsername.toString() === enteredPassword
  ) {
    username = enteredUsername;
    loginScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    welcomeMessage.textContent = `Welcome, ${username}!`;
    loadQuestion();
  } else {
    loginError.textContent =
      "Invalid username or password! Username and password must match and be within the valid range.";
  }
});

// Load question
function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = `${question.topic}: ${question.question}`;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// Check answer
function checkAnswer(selected) {
  const question = questions[currentQuestion];
  if (selected === question.correct) {
    feedback.textContent = "Correct! You are a real forester!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }
  nextButton.classList.remove("hidden");
}

// Load next question
nextButton.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  nextButton.classList.add("hidden");
  loadQuestion();
});

