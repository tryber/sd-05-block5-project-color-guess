const rgbInput = document.getElementById('rgb-color');

function randomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

async function showRGB() {
  const RGB = await randomRGB();
  rgbInput.innerHTML = RGB;
}
showRGB();
