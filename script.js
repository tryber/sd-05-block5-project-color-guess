let r,g,b;
let vetorRgbs = [];
let comparaCor = '';

function criaBolas() {
  let posicaoBolas = document.getElementById('aquiTemBolas');
  posicaoBolas.innerHTML = '';

  if (vetorRgbs.length !== 0) {
    vetorRgbs = [];
  }

  for (let i=0; i < 6; i += 1) {
    r = '';
    g = '';
    b = '';
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    const criaDiv = document.createElement('div');
    criaDiv.className = 'ball';
    let corRandomica = 'rgb(' + r + "," + ' ' + g + "," + ' ' + b + ')';
    vetorRgbs.push(corRandomica);
    criaDiv.style.backgroundColor = corRandomica;
    posicaoBolas.append(criaDiv);
  }
}

criaBolas();
textoRGBrandomico();

function textoRGBrandomico() {
  const escolha = Math.floor(Math.random()*6);
  const posTextoRGB = document.getElementById('rgb-color');
  posTextoRGB.innerHTML = '';
  posTextoRGB.innerHTML = vetorRgbs[escolha];
  comparaCor = vetorRgbs[escolha];
}

const bolas = document.getElementById('aquiTemBolas').childNodes;

function verificaAcerto(element) {
  const pegaPosicaoAlerta = document.getElementById('answer');
  pegaPosicaoAlerta.innerHTML = '';
  if (element.target.style.backgroundColor === comparaCor) {
    pegaPosicaoAlerta.innerHTML = 'Acertou!';
  } else {
    pegaPosicaoAlerta.innerHTML = 'Errou! Tente novamente!';
  }
}

bolas.forEach((item) => {
  item.addEventListener('click', verificaAcerto);
});

function reiniciaTudo() {
  criaBolas();
  textoRGBrandomico();
  const pegaPosicaoAlerta = document.getElementById('answer');
  pegaPosicaoAlerta.innerHTML = 'Escolha uma cor';
  bolas.forEach((item) => {
    item.addEventListener('click', verificaAcerto);
  });
}

const posicaoBotao = document.getElementById('reiniciar');
posicaoBotao.addEventListener('click', reiniciaTudo);
