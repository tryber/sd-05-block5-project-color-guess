const numColors = 6;
let colors = [];
let selectedColor = {};
function createRandomColors() {
  let r = Math.round(Math.random()*255);
  let g = Math.round(Math.random()*255);
  let b = Math.round(Math.random()*255);
  return [r ,g ,b];
}
function selectRandomColor(){
  const size = colors.children.length;
  const c = colors.children[Math.floor(Math.random()*size)].color;
  selectedColor.color = c;
  selectedColor.innerText = '('+c[0]+', '+c[1]+', '+c[2]+')';
}
window.onload = function () {
  colors = this.document.getElementById('colors');
  selectedColor = this.document.getElementById('rgb-color');
  while (colors.children.length < numColors){
    const div = this.document.createElement('div');
    const child = colors.appendChild(div);
    const newColor = createRandomColors();
    child.classList.add('ball');
    child.color = newColor;
    child.style.backgroundColor = 'RGB('+newColor[0]+','+newColor[1]+','+newColor[2]+')';
    child.addEventListener('click', function(element) {
      if(element.target.color === selectedColor.color) {
        document.getElementById('answer').innerText = "Acertou!";
      } else {
        document.getElementById('answer').innerText = "Errou! Tente novamente!";
      }
    });
  }
  selectRandomColor();
};
