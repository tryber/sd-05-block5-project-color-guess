{
  /* <h3 id="rgb-color"></h3>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <h3 id="answer">Escolha uma cor</h3>
    <button id="reset">Reiniciar Jogo</button>
    <button id="score"></button> */
}
const rgbColor = document.getElementById('rgb-color');
const ballsContainer = document.getElementsByClassName('balls-container')[0]
  .children;
const answer = document.getElementById('answer');
const reset = document.getElementById('reset');
const score = document.getElementById('score');
let pontos = 0;

function compareBallWithChosenRGB(event) {
  let colorOfClicked = event.target.style.backgroundColor;
  if(colorOfClicked === rgbColor.innerHTML) {
      pontos += 3;
      score.innerHTML = `Score: ${pontos}`
      answer.innerHTML = `Acertou!`
  } else {
      pontos -= 1;
      score.innerHTML = `Score: ${pontos}`
      answer.innerHTML = `Errou! Tente novamente!`      
  }

  
}

function getRandomRGB() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

for (let i = 0; i < ballsContainer.length; i++) {
  ballsContainer[i].style.backgroundColor = getRandomRGB();
}

let prizedBall;

function selectPrizeBall() {
  let prizedBallPosition = Math.floor(Math.random() * 6);
  prizedBall = ballsContainer[prizedBallPosition];
  return prizedBall;
}
prizedBall = selectPrizeBall();

function getInnerRGB() {
  let innerRGB = prizedBall.style.backgroundColor;
  // console.log(innerRGB)
  return innerRGB;
}

rgbColor.innerHTML = getInnerRGB();

// console.log(prizedBall);
