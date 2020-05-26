let randomText = document.getElementById('rgb-color');

function randomColor () {
  let r = Math.floor(Math.random()* 255);
  let g = Math.floor(Math.random()* 255);
  let b = Math.floor(Math.random()* 255);

  return r + ', ' + g + ', ' + b;
}

function randomTextColor() {
  randomText.innerHTML = `(${randomColor()})`;
}

window.addEventListener('load', randomTextColor());

