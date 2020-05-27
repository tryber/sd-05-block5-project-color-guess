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
      bolas[i].style.backgroundColor = 'rgb' + rGBColor;
    }
  }
}

// verifica se a bola clicada corresponde à cor mostrada
const quadroBolas = document.querySelector('.quadro-bolas');
function verificaClique(e) {
  const corBolaClicada = getComputedStyle(e.target, null).getPropertyValue('background-color');
  const corIndicada = 'rgb' + cor;
  if (corBolaClicada === corIndicada) {
    document.getElementById('resposta').innerText = 'Correct!';
  } else {
    document.getElementById('resposta').innerText = 'Wrong answer! Guess again!';
  }

}
quadroBolas.addEventListener('click', verificaClique);

// reinicia o jogo
const botaoReiniciar = document.querySelector('button');
function reiniciar() {
  sorteiaCor();
  pintarBolas();
  document.getElementById('resposta').innerText = '';
}
botaoReiniciar.addEventListener('click', reiniciar);

function initi() {
  sorteiaCor();
  pintarBolas();
}
window.onload = initi;