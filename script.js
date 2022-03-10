var questions = [
  {
    question: " What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hot Mail",
      "How to Make Lasagna",
      "How to Make Language",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What is the difference between an opening tag and a closing tag?",
    options: [
      "Opening tag has a / in front",
      "Closing tag has a / in front",
      "There is no difference",
      "Both tag has a / in front",
    ],
    correctAnswer: 2,
  },
  {
    question: "< br  / > What type of tag is this?",
    options: ["Break tag", "Broken one", "Opening tag", "Closing tag"],
    correctAnswer: 1,
  },
  {
    question: "< body > Which type of tag is this ?",
    options: ["Break tag", "Broken one", "Opening", "Closing"],
    correctAnswer: 3,
  },

  {
    question: "Where is the meta tag only found??",
    options: [
      "The last page",
      "The home page",
      "The Second page",
      "The Third page",
    ],
    correctAnswer: 2,
  },
];
//assigning variables
var score = 0;
var current_question = 0;
var num_of_questions = 5;
var quiz = document.getElementById("quiz");
var start_btn = document.getElementById("start-quiz");
var container = document.getElementById("quiz-container");
var question = document.getElementById("quiz-question");
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");
var next_button = document.getElementById("btn-next");
var result = document.getElementById("end-result");

// display Question
function displayQuestion(index) {
  var quest = questions[index];
  question.textContent = `${index + 1} .) ${quest.question}`;
  option1.textContent = quest.options[0];
  option2.textContent = quest.options[1];
  option3.textContent = quest.options[2];
  option4.textContent = quest.options[3];
}
// To Display Next Question
function displayNextQuestion() {
  console.log("helllo");
  var option_selected = document.querySelector("input[type=radio]:checked");
  if (!option_selected) {
    if (next_button.textContent !== "ReStart") {
      next_button.disabled = true;
      alert("Select your Answer");
    }
  }
  next_button.disabled = false;
  var ans = option_selected.value;
  if (questions[current_question].correctAnswer == ans) {
    score++;
  }
  option_selected.checked = false;
  current_question++;
  if (current_question == num_of_questions - 1) {
    next_button.textContent = "Submit";
  }
  if (current_question == num_of_questions) {
    showResult();
  }
  displayQuestion(current_question);
}

//To Show Score
function showResult() {
  container.classList.add("hide");
  result.style.display = "";
  result.textContent = `Score: ${score}/${num_of_questions}`;
  next_button.textContent = "ReStart";

  next_button.addEventListener("click", function () {
    quiz.innerHTML = "";
    start_btn.classList.toggle("hide_start_btn");
    window.location.reload();
  });
}

/// To Start Quiz
start_btn.addEventListener("click", function () {
  start_btn.classList.toggle("hide_start_btn");
  container.classList.remove("hide");
  next_button.style.display = "";
  displayQuestion(current_question);
});
