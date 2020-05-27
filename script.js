// Função para criar uma cor aleatória
let rGBColor = '';
function ramdomColor() {
  rGBColor = 'rgb(';
  const red = Math.floor(Math.random() * 256);
  const redName = red.toString();
  const green = Math.floor(Math.random() * 256);
  const greenName = green.toString();
  const blue = Math.floor(Math.random() * 256);
  const blueName = blue.toString();
  rGBColor = `${rGBColor} ${redName},${greenName},${blueName})`;
}