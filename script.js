let questions = [
  "Seu personagem é real?",
  "É brasileiro?",
  "É famoso na internet?",
  "É do sexo masculino?",
  "Tem mais de 30 anos?"
];

let current = 0;

function startGame() {
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("question").innerText = questions[current];
}

function answer(resp) {
  current++;
  if (current < questions.length) {
    document.getElementById("question").innerText = questions[current];
  } else {
    document.getElementById("question").innerText = "Acho que já sei quem é!";
    document.getElementById("buttons").style.display = "none";
  }
}
