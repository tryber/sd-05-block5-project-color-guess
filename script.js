let randomText = document.getElementById('rgb-color');
let balls = document.getElementsByClassName('ball');
let ballsLabel = document.getElementById('ball-content');
let resetButton = document.getElementById('reset-game');
let answer = document.getElementById('answer');
let target = '';

function randomColor () {
  let r = Math.floor(Math.random()* 255);
  let g = Math.floor(Math.random()* 255);
  let b = Math.floor(Math.random()* 255);

  return r + ', ' + g + ', ' + b;
}

function randomTextColor() {
  randomText.innerHTML = `(${randomColor()})`;
}

function randomBallsColor(){
  let random = Math.floor(Math.random() * 5.9999999);
  for( let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb(${randomColor()})`;    
  }
  randomText.innerHTML = balls[random].style.backgroundColor.replace('rgb', '');
  answer.innerHTML = 'Escolha uma cor';
}

function answerText() {
  target = event.target;
  let word = 'rgb'+randomText.innerHTML;
  console.log(word);

  if(target.style.backgroundColor === 'rgb' + randomText.innerHTML ){
    answer.innerHTML = 'Acertou!'
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function resetGame() {

}

ballsLabel.addEventListener('click', answerText);
resetButton.addEventListener('click', randomBallsColor);
window.addEventListener('load', randomTextColor());
window.addEventListener('load', randomBallsColor());

