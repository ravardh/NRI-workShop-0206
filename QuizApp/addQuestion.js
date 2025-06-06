function addQuestion() {
  const ques = document.getElementById("newQuestion").value;
  const op1 = document.getElementById("newQuesOption1").value;
  const op2 = document.getElementById("newQuesOption2").value;
  const op3 = document.getElementById("newQuesOption3").value;
  const op4 = document.getElementById("newQuesOption4").value;
  const crOp = document.getElementById("correctOption").value;

  if (!ques || !op1 || !op2 || !op3 || !op4 || !crOp) {
    alert("Please Fill all the feilds");
    resetTheForm();
    return;
  }

  const tempQuestion = {
    Ques: ques,
    Op1: op1,
    Op2: op2,
    Op3: op3,
    Op4: op4,
    CrOp: crOp,
  };

  const oldQuestion = JSON.parse(localStorage.getItem("QuestionsData")) || [];

  oldQuestion.push(tempQuestion);

  const Question = JSON.stringify(oldQuestion);
  localStorage.setItem("QuestionsData", Question);

  console.log(Question);
  resetTheForm();
}

function resetTheForm() {
  document.getElementById("newQuestion").value = "";
  document.getElementById("newQuesOption1").value = "";
  document.getElementById("newQuesOption2").value = "";
  document.getElementById("newQuesOption3").value = "";
  document.getElementById("newQuesOption4").value = "";
  document.getElementById("correctOption").value = "";
}

// async function questions() {
//   const res = await fetch("SampleQuestions.json");
//   const data = await res.json();
//   console.log(data);
//   const Question = JSON.stringify(data);
//   localStorage.setItem("QuestionsData", Question);
// }

// questions()