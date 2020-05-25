//let cor_sorteada = []
let balas_id = [
  "circulo_1",
  "circulo_2",
  "circulo_3",
  "circulo_4",
  "circulo_5",
  "circulo_6"]

for (let i = 0; i < 6; i++) {
  let rand = this.Math.floor(this.Math.random() * (6 - i))
  preecher(balas_id[rand], cor(), cor(), cor());
  balas_id.splice(rand,1);
  console.log(balas_id)
}

gerar_RGB();

function gerar_RGB() {
 let cor_sorteada = document.getElementsByClassName('ball')[Math.floor(Math.random()*6)].style.backgroundColor.substr(3);
 alert(cor_sorteada)
  document.getElementById('rgb-color').innerHTML = cor_sorteada
}
function cor() {
  let sort=Math.floor(Math.random() * 255);
  return sort>10?sort:10;
}


function preecher(bola, a, b, c) {
  let bola_interna = document.getElementById(bola);
  bola_interna.style.backgroundColor = rgb(a, b, c);
}
function rgb(a, b, c) {
  return 'rgb(' + a + ',' + b + ',' + c + ')'
}