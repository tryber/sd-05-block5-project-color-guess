// variaveis
const textoCor = document.getElementById('rgb-color');

// functions

// funcao que gera um numero random
function getRandomInt(min, max) {
  // funcao recebe 2 valores (minimo e maximo) para randomizar as cores
  min = Math.ceil(min); // arredonda o numero menor para cima
  max = Math.floor(max); // arredonda o numero maior para baixo
  return Math.floor(Math.random() * (max - min)) + min;
  // formula que retorna um valor aleatorio entre o menor e maior numero fornecido
  // poderia ter usado * 255 ja que as cores ficam entre 0 e 255
  // mas dessa maneira posso trocar os valores na proxima funcao caso queira
  // para cores mais escuras colocaria um valor maximo mais baixo
  // para cores claras colocaria um valor minimo mais alto
}

// funcao que recebe os valores da função anterior para gerar as cores
function getRandomColor() {
  const r = getRandomInt(0, 255); // define um valor entre 0 e 255
  const g = getRandomInt(0, 255); // define um valor entre 0 e 255
  const b = getRandomInt(0, 255); // define um valor entre 0 e 255
  const color = `(${r},${g},${b})`; // adiciona os valores definidos em um string
  return color; // retorna a cor randomizada
}

// função que define as 3 cores aleatorias quando a pagina é carregada
function setRandomColors() {
  const guessColor = getRandomColor();
  textoCor.innerHTML = guessColor;
  const setCor1 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor1.style.backgroundColor = setCor1; // seta o style com o valor da variavel
  const setCor2 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor2.style.backgroundColor = setCor2; // seta o style com o valor da variavel
  const setCor3 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor3.style.backgroundColor = setCor3; // seta o style com o valor da variavel
  const setCor4 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor4.style.backgroundColor = setCor4; // seta o style com o valor da variavel
  const setCor5 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor4.style.backgroundColor = setCor5; // seta o style com o valor da variavel
  const setCor6 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  // cor4.style.backgroundColor = setCor6; // seta o style com o valor da variavel
}

setRandomColors();
