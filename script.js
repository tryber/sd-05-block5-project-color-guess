// Função para criar uma cor aleatória
let rGBColor = '';
function ramdomColor() {
  rGBColor = '';
  const red = Math.floor(Math.random() * 256);
  const redName = red.toString();
  const green = Math.floor(Math.random() * 256);
  const greenName = green.toString();
  const blue = Math.floor(Math.random() * 256);
  const blueName = blue.toString();
  rGBColor = `(${redName}, ${greenName}, ${blueName})`;
}

// função para sortear uma cor e colocar na caixa e em uma bola
let cor = '';
function sorteiaCor() {
  ramdomColor();
  cor = rGBColor;
  document.getElementById('rgb-color').innerText = cor;
  const bola = Math.floor(Math.random() * 6);
  document.querySelectorAll('.ball')[bola].style.backgroundColor = 'rgb' + cor;
}

// função para pintar as outras bolas
function pintarBolas() {
  const bolas = document.getElementsByClassName('ball');
  for (let i = 0; i < 6; i += 1) {
    if (bolas[i].style.backgroundColor !== 'rgb' + cor) {
      ramdomColor();
      console.log('rgb' + rGBColor);
      bolas[i].style.backgroundColor = 'rgb' + rGBColor;
    }
  }
}

function initi() {
  sorteiaCor();
  pintarBolas();
}
window.onload = initi;