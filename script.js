const rgbColor = document.getElementById('rgb-color');
const ballsContainer = document.getElementsByClassName('balls-container')[0]
  .children;
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
let pontos = 0;


for (let i = 0; i < ballsContainer.length; i+= 1) {
  ballsContainer[i].addEventListener('click', compareBallWithChosenRGB);
}

function compareBallWithChosenRGB(event) {
  const colorOfClicked = event.target.style.backgroundColor;
  if (colorOfClicked === rgbColor.innerHTML) {
    pontos += 3;
    score.innerHTML = `${pontos}`;
    answer.innerHTML = 'Acertou!';
  } else {
    pontos -= 1;
    score.innerHTML = `${pontos}`;
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function getRandomRGB() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

let prizedBall;

function selectPrizeBall() {
  const prizedBallPosition = Math.floor(Math.random() * 6);
  prizedBall = ballsContainer[prizedBallPosition];
  return prizedBall;
}

function getInnerRGB() {
  let innerRGB = prizedBall.style.backgroundColor;
  return innerRGB;
}

function resetColors() {
  for (let i = 0; i < ballsContainer.length; i+= 1) {
    ballsContainer[i].style.backgroundColor = getRandomRGB();
  }
  selectPrizeBall();
  getInnerRGB();
  rgbColor.innerHTML = getInnerRGB();
}



reset.addEventListener('click', resetColors);
window.onload = resetColors();
