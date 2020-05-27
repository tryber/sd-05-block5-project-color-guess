// function that creates a random rgb color
function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `(${r}, ${g}, ${b})`;
}

// add to the p element the result of the randomColor function
document.querySelector('p').innerHTML = randomColor();