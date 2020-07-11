const rgbInput = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const restart = document.getElementById('restart');
const score = document.getElementById('score');

function randomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

function resetColors() {
  const randomBall = Math.floor(Math.random() * 6);
  Array.from(balls).forEach((ball) => {
    ball.style.backgroundColor = `rgb${randomRGB()}`;
  });
  rgbInput.innerHTML = balls[randomBall].style.backgroundColor.replace(
    'rgb',
    '',
  );
  answer.innerHTML = 'Qual a cor equivalente ao RGB?';
}

function gameAnswer(event) {
  const chosenColor = event.target;
  if (chosenColor.style.backgroundColor === (`rgb${rgbInput.innerHTML}`)) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = parseFloat(score.innerHTML) + 3;
    setTimeout((() => {
      resetColors();
    }), 1000);
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

/* Event Listeners */
Array.from(balls).forEach(ball => ball.addEventListener('click', gameAnswer));
restart.addEventListener('click', () => {
  score.innerHTML = 0;
  resetColors();
});

/* On Load Actions */
window.onload = resetColors();
window.onload = function () {
  score.innerHTML = 0;
};
