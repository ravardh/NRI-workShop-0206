function addQuestion() {
  const ques = document.getElementById("newQuestion").value;
  const op1 = document.getElementById("newQuesOption1").value;
  const op2 = document.getElementById("newQuesOption2").value;
  const op3 = document.getElementById("newQuesOption3").value;
  const op4 = document.getElementById("newQuesOption4").value;
  const crOp = document.getElementById("correctOption").value;

  const tempQuestion = {
    Ques: ques,
    Op1: op1,
    Op2: op2,
    Op3: op3,
    Op4: op4,
    CrOp: crOp,
  };

  const oldQuestion = JSON.parse(localStorage.getItem("QuestionsData")) || [];
  
  oldQuestion.push(tempQuestion)

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
