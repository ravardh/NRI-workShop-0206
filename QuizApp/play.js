let score = 0;
let question = [];
let index = 0;

function LoadQuestion() {
  const allQuestions = JSON.parse(localStorage.getItem("QuestionsData"));

  for (var i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * 50);
    var Flag = 0;
    question.forEach((Element) => {
      if (Element.Ques === allQuestions[index].Ques) {
        Flag = 1;
      }
    });
    if (Flag === 0) {
      question.push(allQuestions[index]);
    } else {
      i = i - 1;
    }
  }

  console.log(question);
}

LoadQuestion();

function StartGame() {
  document.getElementById("StartGame").style.display = "none";
  document.getElementById("Game").style.display = "block";
  NextQuestion();
}

function NextQuestion() {
  //Check Current Question
  if (index !== 0 && document.querySelector("input[name='Options']:checked")) {
    const selectedoption = document.querySelector(
      "input[name='Options']:checked"
    ).value;
    console.log(selectedoption);

    if (question[index - 1].CrOp === selectedoption) {
      score = score + 1;
      console.log("Score =", score);
    }
    document.querySelector("input[name='Options']:checked").checked = false;
  }

  //Display Next Question
  if (index === 10) {
    resultDeclare();
    return;
  }

  const currentQuestion = question[index];

  document.getElementById("Question").innerText = currentQuestion.Ques;
  document.getElementById("Option1").innerText = currentQuestion.Op1;
  document.getElementById("Option2").innerText = currentQuestion.Op2;
  document.getElementById("Option3").innerText = currentQuestion.Op3;
  document.getElementById("Option4").innerText = currentQuestion.Op4;

  index = index + 1;
}

function resultDeclare() {
  document.getElementById("Game").style.display = "none";
  document.getElementById("Result").style.display = "block";

  if (score === 0) {
    document.getElementById("Greetings").innerText =
      "Opps !!! Better Luck Next Time";
  } else if (score > 0 && score < 10) {
    document.getElementById("Greetings").innerText = "Congratulation";
  } else {
    document.getElementById("Greetings").innerText = "Excellent Job";
  }
  document.getElementById("score").innerText = score;
}

function restartGame() {
  location.reload();
}
