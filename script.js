const numColors = 6;
let score = 0;
let colors = [];
let selectedColor = {};
function createRandomColors() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return [r, g, b];
}
function selectRandomColor() {
  const size = colors.children.length;
  const c = colors.children[Math.floor(Math.random() * size)].color;
  selectedColor.color = c;
  selectedColor.innerText = `(${String(c[0])}, ${String(c[1])}, ${String(c[2])})`;
  document.getElementById('answer').innerText = 'Escolha uma cor';
}
function gamble(element) {
  if (element.target.color === selectedColor.color) {
    document.getElementById('answer').innerText = 'Acertou!';
    score += 3;
    document.getElementById('score').innerText = score;
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
}
function initColors() {
  while (colors.children.length < numColors) {
    const div = this.document.createElement('div');
    const child = colors.appendChild(div);
    const newColor = createRandomColors();
    child.classList.add('ball');
    child.color = newColor;
    child.style.backgroundColor = `RGB(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
    child.addEventListener('click', gamble);
  }
}
window.onload = function () {
  colors = this.document.getElementById('colors');
  selectedColor = this.document.getElementById('rgb-color');
  this.initColors();
  this.selectRandomColor();
  this.document.getElementById('reset-game').addEventListener('click', function () {
    for (let child of colors.children) {
      const newColor = createRandomColors();
      child.color = newColor;
      child.style.backgroundColor = `RGB(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
    }
    selectRandomColor();
  });
};
