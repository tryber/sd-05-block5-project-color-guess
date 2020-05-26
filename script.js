const rgbcolor = document.getElementById("rgb-color");
const answer = document.getElementById("answer");
const ballColors = document.getElementsByClassName("ball");
const scoreCountRef = document.getElementById("score");
//INICIA O JOGO
window.onload = resetCores();
window.onload = function () {
  scoreCountRef.innerHTML = 0;
};

//FUNÇAO QUE GERA AS CORES
function geraRGB() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let cor = "(" + R + ", " + G + ", " + B + ")";
  return cor;
}

//VERIFICA SE ESTA TUDO CERTO OU ERRADO
let scoreCount = 0;
function certoOuErrado(event) {
  let target = event.target;
  let targetColor = target.style.backgroundColor;
  if (targetColor === "rgb" + rgbcolor.innerHTML) {
    answer.innerHTML = "Acertou!";
    scoreCount += 3;
    scoreCountRef.innerHTML = scoreCount;
  } else {
    answer.innerHTML = "Errou! Tente novamente!";
  }
}
ballColors[0].addEventListener("click", certoOuErrado);
ballColors[1].addEventListener("click", certoOuErrado);
ballColors[2].addEventListener("click", certoOuErrado);
ballColors[3].addEventListener("click", certoOuErrado);
ballColors[4].addEventListener("click", certoOuErrado);
ballColors[5].addEventListener("click", certoOuErrado);

//RESET GERAL

function resetCores() {
  let random = Math.floor(Math.random() * 6);
  ballColors[0].style.backgroundColor = "rgb" + geraRGB();
  ballColors[1].style.backgroundColor = "rgb" + geraRGB();
  ballColors[2].style.backgroundColor = "rgb" + geraRGB();
  ballColors[3].style.backgroundColor = "rgb" + geraRGB();
  ballColors[4].style.backgroundColor = "rgb" + geraRGB();
  ballColors[5].style.backgroundColor = "rgb" + geraRGB();
  rgbcolor.innerHTML = ballColors[random].style.backgroundColor.replace(
    "rgb",
    ""
  );
  answer.innerHTML = "Escolha uma cor";
}

const resetar = document.getElementById("reset-game");
resetar.addEventListener("click", resetCores);
