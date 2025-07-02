// Quiz Data
const quiz = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Cool Style Sheet"],
    answer: "Cascading Style Sheet"
  }
];

let current = 0;
let score = 0;

// Display Question
function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  document.getElementById("score").innerText = `Score: ${score}/${quiz.length}`;
  document.getElementById("options").innerHTML = q.options.map(opt =>
    `<button onclick="checkAnswer('${opt}')">${opt}</button>`
  ).join("");
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  if (selected === correct) {
    score++;
    document.getElementById("score").innerText = `✅ Correct! Score: ${score}/${quiz.length}`;
  } else {
    document.getElementById("score").innerText = `❌ Wrong! The answer was "${correct}". Score: ${score}/${quiz.length}`;
  }
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}

showQuestion();

// Joke Fetcher
async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  document.getElementById("jokeArea").innerText = `${data.setup} 😂 ${data.punchline}`;
}
