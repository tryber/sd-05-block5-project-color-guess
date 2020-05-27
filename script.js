const rgbColor = document.getElementById('rgb-color');
const ballsContainer = document.getElementsByClassName('balls-container')[0]
  .children;
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
let pontos = 0;

function compareBallWithChosenRGB(event) {
  let colorOfClicked = event.target.style.backgroundColor;
  if (colorOfClicked === rgbColor.innerHTML) {
    pontos += 3;
    score.innerHTML = `${pontos}`;
    answer.innerHTML = `Acertou!`;
  } else {
    pontos -= 1;
    score.innerHTML = `${pontos}`;
    answer.innerHTML = `Errou! Tente novamente!`;
  }
}

function getRandomRGB() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function resetColors() {
  for (let i = 0; i < ballsContainer.length; i++) {
    ballsContainer[i].style.backgroundColor = getRandomRGB();
  }
  let prizedBall;
  selectPrizeBall();
  getInnerRGB();
  rgbColor.innerHTML = getInnerRGB();
}
function selectPrizeBall() {
  let prizedBallPosition = Math.floor(Math.random() * 6);
  prizedBall = ballsContainer[prizedBallPosition];
  return prizedBall;
}

function getInnerRGB() {
  let innerRGB = prizedBall.style.backgroundColor;
  return innerRGB;
}

reset.addEventListener('click', resetColors);
window.onload = resetColors();
