// function that creates a random rgb color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `(${r}, ${g}, ${b})`;
}

// add event listener to check whether the color of the clicked button matches the rgb color
const balls = document.querySelector('.balls');
let score = 0;
const mainColor = document.querySelector('.rgb-color');

window.onload = function () {
  document.querySelector('span').innerHTML = localStorage.getItem('score');
  balls.addEventListener('click', function (event) {
    const colorSelected = event.target.style.backgroundColor.replace('rgb', '');
    if (mainColor.innerHTML === colorSelected) {
      document.querySelector('.answer').innerHTML = 'Acertou!';
      // count the matches and add it to local storage
      score = parseInt(localStorage.getItem('score'), 10) + 3;
      localStorage.setItem('score', score);
      document.querySelector('span').innerHTML = localStorage.getItem('score');
    } else {
      document.querySelector('.answer').innerHTML = 'Errou! Tente novamente!';
    }
  });
};

// add random colors to the balls
const buttons = document.getElementsByClassName('ball');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.backgroundColor = 'rgb'.concat(randomColor());
}

// add to the p.rgb-color element the background color of one of the balls
const randomInteger = Math.floor((Math.random() * 5) + 1);
mainColor.innerHTML = buttons[randomInteger].style.backgroundColor.replace('rgb', '');

// button that reload the game
const reloadButton = document.querySelector('.start-again');
reloadButton.addEventListener('click', function () {
  location.reload();
});

// button that make the score to be zero
const zero = document.querySelector('.zero-button');
zero.addEventListener('click', function () {
  localStorage.setItem('score', 0);
  location.reload();
});
