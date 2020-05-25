let cor_sorteada = []
gerar_RGB();
function gerar_RGB() {
  cor_sorteada = [cor(), cor(), cor()];
  document.getElementById('cor_RGB').innerHTML='('+cor_sorteada.join(',')+')'
}
function cor() {
  return Math.floor(Math.random() * 255);
}