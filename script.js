// function that creates a random rgb color
function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `(${r}, ${g}, ${b})`;
}

// add event listener to check whether the color of the clicked button matches the rgb color
const balls = document.querySelector('.ball');
balls.addEventListener('click', function (event) {
  let colorSelected = event.target.style.backgroundColor;
});

// add random colors to the balls
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.backgroundColor = 'rgb' + randomColor();
}

// add to the p element the background color of one of the balls
let randomInteger = Math.floor(Math.random() * 6 + 1);
document.querySelector('.rgb-color').innerHTML = buttons[randomInteger].style.backgroundColor.replace('rgb', '');