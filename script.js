// function that creates a random rgb color
function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `(${r}, ${g}, ${b})`;
}

// add event listener to check whether the color of the clicked button matches the rgb color
const balls = document.querySelector('.balls');
balls.addEventListener('click', function (event) {
  let colorSelected = event.target.style.backgroundColor.replace('rgb', '');
  if (mainColor.innerHTML === colorSelected) {
    document.querySelector('.answer').innerHTML = 'Acertou!';
  } else {
    document.querySelector('.answer').innerHTML = 'Errou! Tente novamente!';
  }

});

// add random colors to the balls
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.backgroundColor = 'rgb' + randomColor();
}

// add to the p.rgb-color element the background color of one of the balls
let randomInteger = Math.floor(Math.random() * 6 + 1);
const mainColor = document.querySelector('.rgb-color');
mainColor.innerHTML = buttons[randomInteger].style.backgroundColor.replace('rgb', '');

